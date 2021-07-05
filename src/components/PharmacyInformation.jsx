import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./component.scss";

function PharmacyInformation(props) {
  const { idType, pharmacyId ,onAddBtnClick, id, onDeleteBtnClick } = props;
  return (
    <div>
      <Grid container className="pharmacy-information-container">
        <div className={id===0 ? "inline-text-fields-first" : "inline-text-fields"}>
          {id === 0 ? <AddCircleIcon className="add-icon" onClick={onAddBtnClick} /> : ''}
          <Grid className="id-type-field">
            <Autocomplete
              options={idType}
              getOptionLabel={(region) => region.type}
              renderInput={(params) => (
                <TextField {...params} label="ID Type" variant="outlined" size="small" className="field" />
              )}
            />
          </Grid>
          <Grid className="id-field">
          <Autocomplete
                multiple
                id="tags-outlined"
                options={pharmacyId}
                getOptionLabel={(list) => list.id}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Pharmacy ID(s)"
                    className="field"
                    size="small"
                  />
                )}
              />
          </Grid>
          <Grid className="file-input">
              <TextField
                variant="outlined"
                type="file"
                className="field"
                size="small"
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

export default PharmacyInformation;
