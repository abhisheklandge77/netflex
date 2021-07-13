import React from "react";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./component.scss";

function Accordian(props) {
  const { options,title } = props;
  return (
    <div>
      <Grid className="accordian">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            {options.map((option) => {
              return (
                <Grid className="field">
                  {option.subHeading ? (
                    <div>
                      <Typography className="label">
                        {option.subHeading}
                      </Typography>
                    </div>
                  ) : (
                    <div className="subdetails">
                      <Typography className="label">
                        {option.label} :
                      </Typography>
                      <Typography className="value">{option.value}</Typography>
                    </div>
                  )}
                </Grid>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

export default Accordian;
