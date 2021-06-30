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
import "./component.scss";
import { makeStyles, StepConnector, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    width: "80%",
    margin: "0 auto",
    textAlign: "left",
  },
  nextBtn: {
    backgroundColor: "#1684de",
    marginLeft: "20px",
    marginTop: "20px",
  },
  backBtn: {
    marginTop: "20px",
  },
}));
const props = {
  title: "Network Model Information",
  networkTypes: [
    { typeName: "Regional" },
    { typeName: "abc" },
    { typeName: "xyz" },
    { typeName: "pqr" },
  ],
  networkProductType: [{ name: "New" }, { name: "Old" }],
  networkIDType: [
    { type: "Network Product" },
    { type: "ABC" },
    { type: "XYZ" },
  ],
  idList: [{ id: "12345" }, { id: "23456" }, { id: "34567" }],
};

function getSteps() {
  return [
    "Network Model",
    "Network Utilization Parameters",
    "Disruption Reporting",
    "Review & Submit",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <NetworkModelInfo {...props} />;
    case 1:
      return "Network Utilization Parameters";
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
    width: 50,
    height: 50,
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
        <FiberManualRecord />
      )}
    </div>
  );
}

function CreateNetworkModel() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div className={classes.btnContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backBtn}
              >
                Back
              </Button>
              <Button
                variant="contained"
                className={classes.nextBtn}
                onClick={handleNext}
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

export default CreateNetworkModel;
