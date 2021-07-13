import React from "react";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from '@material-ui/icons/Edit';
import Accordian from './Accordian';
import "./component.scss";

function Summary() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const networkParameters =[
      {options : [{label : 'Network Product ID',value : '9970850070'},{label : 'Start Date',value : '09/07/2021'}],title : 'Claim'},
      {options : [{label : 'State',value : 'Connecticut'},{label : 'Region',value : 'NorthEast'},{label : 'Buyer Group',value : 'N/A'},{label : 'Funding Type',value : 'N/A'},{label : 'Selected',value : 'Full Book Of Business'}],title : 'Eligibility'},
      {options : [{subHeading : 'Type ID'},{label : 'Super Chain ID',value : '223547489'},{label : 'Pharmacy IDs',value : 'File Uploaded'},{subHeading : 'Type ID'},{label : 'Chain ID',value : '223547489'},{label : 'Pharmacy IDs',value : '12344,213231'}],title : 'Pharmacies'},
      {options : [{label : 'Utilization %',value : '25'},],title : 'Pharmacy Utilization'},
  ]

  return (
    <div>
      <Grid className="summary">
        <div className="title">
          <h2>Summary</h2>
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="network-model-info"
          >
            <Typography className="heading">Network Model</Typography>
            <EditIcon className="edit-icon" />
          </AccordionSummary>
          <AccordionDetails className="details">
          <div className="row">
                <Grid className="field">
                    <Typography className="label">Network Model Name : </Typography><Typography className="value">National 7.0</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Network Model Type : </Typography><Typography className="value">Regional</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Region Type : </Typography><Typography className="value">Geographic</Typography>
                </Grid>
            </div>
            <div className="row">
                <Grid className="field">
                    <Typography className="label">Network Product Change Type : </Typography><Typography className="value">New</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Network ID Type : </Typography><Typography className="value">Network Product</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Region : </Typography><Typography className="value">NorthEast</Typography>
                </Grid>
            </div>
          <div className="row">
                <Grid className="field">
                    <Typography className="label">Target Effective Date : </Typography><Typography className="value">09/07/2021s</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Network Product ID : </Typography><Typography className="value">12345</Typography>
                </Grid>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="network-parameters-info">
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="header"
            >
            <Typography className="heading">Network Utilization Parameters</Typography>
            <EditIcon className="edit-icon" />
            </AccordionSummary>
            <AccordionDetails>
                {
                    networkParameters.map(option => {
                        return(
                            <Grid className="accordian-container">
                                <Accordian {...option}/>
                            </Grid>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>

        <Accordion className="disruption-reporting-info">
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="header"
            >
            <Typography className="heading">Disruption Reporting</Typography>
            <EditIcon className="edit-icon" />
            </AccordionSummary>
            <AccordionDetails className="details">
            <div className="row">
                <Grid className="field">
                    <Typography className="label">Selected : </Typography><Typography className="value">Summary GEO Acesses Impact Report</Typography>
                </Grid>
                <Grid className="field">
                    <Typography className="label">Selected : </Typography><Typography className="value">GEO Acesses By Cigna Standards Network/State</Typography>
                </Grid>
            </div>
            <div className="row">
                <Grid className="field">
                    <Typography className="label">Selected : </Typography><Typography className="value">Member Detail Disruption</Typography>
                </Grid>
            </div>
            </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

export default Summary;
