import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "./component.scss";

function RegionInput(props) {
  const { regionType,region,onAddBtnClick,id,onDeleteBtnClick } = props;
  const [regval,setRegVal] = React.useState('');

  const handleRegionChange = () => {
    setRegVal(region);
  }

  return (
    <div>
      <Grid container className="region-input-container">
        <div className="inline-text-fields">
        <AddCircleIcon className="add-icon" onClick={onAddBtnClick}/>
          <Grid item xs={3}>
            <Autocomplete
              options={regionType}
              getOptionLabel={(region) => region.type}
              renderInput={(params) => (
                <TextField {...params} label="Region Type" onChange={handleRegionChange} variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              label="Region"
              className="text-field"
              variant="outlined"
              value={regval}
            />
          </Grid>
          {id>0 ? <HighlightOffIcon className="delete-icon" onClick={() => onDeleteBtnClick(id)}/> : ''}
        </div>
      </Grid>
    </div>
  );
}

export default RegionInput;
