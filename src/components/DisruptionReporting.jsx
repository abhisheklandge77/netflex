import { Checkbox, FormControlLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./component.scss";

function DisruptionReporting() {
    
    const disruptionReportingProps = [{name :'Summary GEO Access Impact Report'},{name :'Standard Detailed Disruption'},{name :'Member Detail Disruption'},{name :'GEO Access By Cigna Standards Network/State'}];
      

  return (
    <div>
      <Grid className="disruption-reporting">
        <div className="title">
          <h2>DISRUPTION REPORTING OPTIONS</h2>
          <div className="options-container">
            <div>
            {disruptionReportingProps.map(option => {
                return(
                    <FormControlLabel
                     className="options"
                    control={<Checkbox color="primary" />}
                    label={option.name}
                  />
                )
            })
            }  
            </div>
            <div>
            {disruptionReportingProps.map(option => {
                return(
                    <FormControlLabel
                     className="options"
                    control={<Checkbox color="primary" />}
                    label={option.name}
                  />
                )
            })
            } 
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default DisruptionReporting;
