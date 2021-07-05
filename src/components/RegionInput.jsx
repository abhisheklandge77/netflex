import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./component.scss";

function RegionInput(props) {
  const {  id,regionType, onAddBtnClick, onDeleteBtnClick } = props;
  return (
    <div>
      <Grid className="region-input-container">
        <div className={id===0 ? "inline-text-fields-first" : "inline-text-fields"}>
          {id === 0 ? <AddCircleIcon className="add-icon" onClick={onAddBtnClick} /> : ''}
          <Grid className="region-type-field">
            <Autocomplete
              options={regionType}
              getOptionLabel={(region) => region.type}
              className="field"
              renderInput={(params) => (
                <TextField {...params} label="Region Type" size="small" variant="outlined" />
              )}
            />
          </Grid>
          <Grid className="region-field">
          <Autocomplete
              options={regionType}
              className="field"
              getOptionLabel={(region) => region.region}
              renderInput={(params) => (
                <TextField {...params} label="Region Type" size="small" variant="outlined" />
              )}
            />
          </Grid>
          {id > 0 ? (
            <HighlightOffIcon
              className="delete-icon"
              onClick={() => onDeleteBtnClick(id)}
            />
          ) : (
            ""
          )}
        </div>
      </Grid>
    </div>
  );
}

export default RegionInput;
