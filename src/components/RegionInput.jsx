import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "./component.scss";

function RegionInput(props) {
  const { regionType,onAddBtnClick,id,onDeleteBtnClick } = props;
  return (
    <div>
      <Grid container className="region-input-container">
        <div className="inline-text-fields">
        <AddCircleIcon className="add-icon" onClick={onAddBtnClick}/>
          <Grid item xs={4}>
            <Autocomplete
              options={regionType}
              getOptionLabel={(region) => region.type}
              renderInput={(params) => (
                <TextField {...params} label="Region Type" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Region"
              className="text-field"
              variant="outlined"
            />
          </Grid>
          {id>0 ? <HighlightOffIcon className="delete-icon" onClick={() => onDeleteBtnClick(id)}/> : ''}
        </div>
      </Grid>
    </div>
  );
}

export default RegionInput;
