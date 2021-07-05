import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Check from "@material-ui/icons/Check";
import NetworkModelInfo from "./NetworModelInfo";
import NetworkUtilizationParameter from "./NetworkUtilizationParameter";
import "./component.scss";
import { makeStyles, StepConnector, withStyles } from "@material-ui/core";

const networkUtilizationProps = {
  title1: "CLAIM INFORMATION",
  title2: "ELIGIBILITY INFORMATION",
  title3: "PHARMACY INFORMATION",
  buyerGroup: [{ name: "ABC" }, { name: "PQR" }, { name: "XYZ" }],
  state: [{ name: "Connecticut" }, { name: "ABC" }, { name: "XYZ" }],
};

function getSteps() {
  return [
    "Network Model",
    "Network Utilization Parameters",
    "Disruption Reporting",
    "Review & Submit",
  ];
}

function getStepContent(stepIndex, stepState,onFieldChange) {
  switch (stepIndex) {
    case 0:
      return <NetworkModelInfo onFieldChange={onFieldChange} title="NETWORK MODEL INFORMATION" {...stepState} />;
    case 1:
      return <NetworkUtilizationParameter {...networkUtilizationProps} />;
    case 2:
      return "Disruption Reporting";
    case 3:
      return "Review & Submit";
    default:
      return "Unknown Step";
  }
}
const DotConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#1684de",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#1684de",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useDotIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#1684de",
  },
  completed: {
    backgroundColor: "#1684de",
  },
  dotIcon: {
    height: 15,
    width: 15,
  },
});

function DotIcon(props) {
  const classes = useDotIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <FiberManualRecord className={classes.dotIcon} />
      )}
    </div>
  );
}
const modelTypes=[
  { type: "Regional" },
  { type: "abc" },
  { type: "xyz" },
  { type: "pqr" },
];
const networkProductType = [{ type: "New" }, { type: "Old" }];
const networkIdType = [
      { type: "Network Product",id : '1234' },
      { type: "ABC" ,id : '5678'},
      { type: "XYZ" ,id : '9087'},
    ];
const idList = [{ id: "12345" }, { id: "23456" }, { id: "34567" }];

class CreateNetworkModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      step1 : {
        fields : {
          networkModelName : {
            path : 'networkModelName',
            value : '',
            errorMsg : '',
            required: true,
          },
          networkModelType : {
            path : 'networkModelType',
            value : modelTypes[0],
            valueList : modelTypes,
            errorMsg : '',
            required: true,
          },
          networkProductType : {
            path : 'networkProductType',
            value : networkProductType[0],
            valueList : networkProductType,
            errorMsg : '',
            required: true,
          },
          targetEffectiveDate : {
            path : 'targetEffectiveDate',
            value : '',
            errorMsg : '',
            required: true,
          },
          networkIdType : {
            path : 'networkIdType',
            value : networkIdType[0],
            valueList : networkIdType,
            errorMsg : '',
            required: true,
          },
          networkProductId : {
            path : 'networkProductId',
            value : '',
            errorMsg : '',
            required: true,
          },
          idList : {
            path : 'idList',
            value : '',
            valueList : idList,
            errorMsg : '',
            required: true,
          },
          networkUtilizationParameters : {
            path : 'networkUtilizationParameters',
            value:{
            claim : false,
            eligibility : false,
            pharmacy : false,
            pharmacyUtilization: false
          }},
          description : {
            path : 'description',
            value : '',
          },
        }
      }
    };
  }
  handleNext = () => {
    this.setState(prevState => ({activeStep : prevState.activeStep + 1}));
  };

  handleBack = () => {
    this.setState(prevState => ({activeStep : prevState.activeStep - 1}));
  };

  handleReset = () => {
    this.setState({activeStep : 0});
  };
  handleFieldChange = (path, value, type) => {
    const { activeStep } = this.state;
      const stepKey = `step${activeStep+1}`;
      const stepState = this.state[stepKey];
      let fieldState;
      if(type==='checkbox'){
        const paths = path.split('-')
        fieldState = stepState.fields[paths[0]];
        fieldState.value[paths[1]] = value;
      }else{
        fieldState = stepState.fields[path];
        fieldState.value = value;
      }
      
        if(fieldState.required){
          if(!fieldState.value){
            fieldState.errorMsg = 'Field is required';
          }else{
            fieldState.errorMsg = '';
          }
        }
      this.setState((prevState)=>{
        prevState[stepKey]['fields'][path] = fieldState;
        console.log(prevState);
        return {...prevState};
      });
  }
  render() {
    const { activeStep, step1 } = this.state;
    const steps = getSteps();

    return (
      <div>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<DotConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={DotIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep, step1,this.handleFieldChange)}</Typography>
              <div className="btnContainer">
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className="backBtn"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  className="nextBtn"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CreateNetworkModel;
