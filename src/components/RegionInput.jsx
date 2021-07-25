import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./component.scss";

function RegionInput(props) {
  const {  id,item,onFieldChange,onAddBtnClick, onDeleteBtnClick } = props;
  return (
    <div>
      <Grid className="region-input-container">
        <div className={id===0 ? "inline-text-fields-first" : "inline-text-fields"}>
          {id === 0 ? <AddCircleIcon className="add-icon" onClick={(e) =>onAddBtnClick('regionInput')} /> : ''}
          <Grid className="region-type-field">
            <Autocomplete
              options={item.regionType.valueList}
              id="region-field"
              getOptionLabel={(region) => region.type}
              className="field"
              value={item.regionType.value}
              onChange={(e,value) => {
                onFieldChange(item.regionType.path,value,'multifield',id);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Region Type *" id="region-type" size="small" variant="outlined" helperText={item.regionType.errorMsg}
                error={item.regionType.errorMsg ? true : false} />
              )}
            />
          </Grid>
          <Grid className="region-field">
          <Autocomplete
              options={item.region.valueList}
              id="region"
              className="field"
              value={item.region.value}
              onChange={(e,value) => {
                onFieldChange(item.region.path,value,'multifield',id);
              }}
              getOptionLabel={(region) => region.region}
              renderInput={(params) => (
                <TextField {...params} label="Region *" id="region" size="small" variant="outlined" helperText={item.region.errorMsg}
                error={item.region.errorMsg ? true : false}/>
              )}
            />
          </Grid>
          {id > 0 ? (
            <HighlightOffIcon
              className="delete-icon"
              onClick={() => onDeleteBtnClick(id,'regionInput')}
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
