import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RegionInput from "./RegionInput";
import "./component.scss";

function NetworkModelInfo(props) {
  const { fields, title, onFieldChange,onAddBtnClick,onDeleteBtnClick } = props;
  const { networkModelName,networkModelType,networkProductType,targetEffectiveDate,networkIdType,networkProductId,idList,
    regionInput,networkUtilizationParameters,description } = fields;

  const handleCheckboxChange = (event) => {
    const {path, name, checked, type} = event.target;
    console.log(path, name, checked);
    onFieldChange(`${networkUtilizationParameters.path}-${name}`, checked, type);
  };

  return (
    <div>
      <Grid className="network-model-container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="container">
          <Grid className="text-field">
            <TextField
              label="Network Model Name *"
              variant="outlined"
              className="field"
              size="small"
              path={networkModelName.path}
              value={networkModelName.value}
              helperText={networkModelName.errorMsg}
              error={networkModelName.errorMsg ? true : false}
              onChange={(e) => {
                onFieldChange(networkModelName.path, e.target.value);
              }}
            />
          </Grid>
          <Grid className="text-field">
            <Autocomplete
              options={networkModelType.valueList}
              className="field"
              defaultValue={networkModelType.value}
              path={networkModelType.path}
              getOptionLabel={(option) => option.type}
              onChange={(e,value) => {
                onFieldChange(networkModelType.path,value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Network Model Type *"
                  variant="outlined"
                  size="small"
                  value={networkModelType.value}
                  helperText={networkModelType.errorMsg}
                  error={networkModelType.errorMsg ? true : false}
                />
              )}
            />
          </Grid>
        </div>
        <div className="container">
          <Grid className="text-field">
            <Autocomplete
              options={networkProductType.valueList}
              getOptionLabel={(option) => option.type}
              path={networkProductType.path}
              defaultValue={networkProductType.value}
              onChange={(e,value) => {
                onFieldChange(networkProductType.path,value);
              }}
              className="field"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Network Product Change Type *"
                  variant="outlined"
                  size="small"
                  helperText={networkProductType.errorMsg}
                  error={networkProductType.errorMsg ? true : false}
                />
              )}
            />
          </Grid>
          <Grid className="text-field">
            <TextField
              label="Target Effective Date *"
              type="date"
              className="field"
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              path={targetEffectiveDate.path}
              value={targetEffectiveDate.value}
              helperText={targetEffectiveDate.errorMsg}
              error={targetEffectiveDate.errorMsg ? true : false}
              onChange={(e) => {
                onFieldChange(targetEffectiveDate.path, e.target.value);
              }}
            />
          </Grid>
        </div>
        <div className="inline-text-fields">
          <Grid className="network-id-field">
            <Autocomplete
              options={networkIdType.valueList}
              getOptionLabel={(option) => option.type}
              path={networkIdType.path}
              defaultValue={networkIdType.value}
              onChange={(e,value) => {
                onFieldChange(networkIdType.path,value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Network ID Type *"
                  variant="outlined"
                  className="field"
                  size="small"
                  helperText={networkIdType.errorMsg}
                  error={networkIdType.errorMsg ? true : false}
                />
              )}
            />
          </Grid>
          <Grid className="product-id-field">
            <TextField
              label="Network Product ID *"
              className="field"
              variant="outlined"
              size="small"
              path={networkProductId.path}
              value={networkProductId.value}
              helperText={networkProductId.errorMsg}
              error={networkProductId.errorMsg ? true : false}
              onChange={(e) => {
                onFieldChange(networkProductId.path, e.target.value);
              }}
            />
          </Grid>
          <Grid className="list-id-field">
            <Autocomplete
              multiple
              id="tags-outlined"
              className="field"
              options={idList.valueList}
              getOptionLabel={(list) => list.id}
              path={idList.path}
              onChange={(e,value) => {
                onFieldChange(idList.path,value);
              }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label="List ID(s)"
                  helperText={idList.errorMsg}
                  error={idList.errorMsg ? true : false}
                />
              )}
            />
          </Grid>
          <Grid className="file-input">
            <TextField
              variant="outlined"
              type="file"
              size="small"
              className="field"
            />
          </Grid>
          <Grid>
            <DeleteOutlineIcon />
          </Grid>
        </div>
        {regionInput.map((item, index) => {
          const props = {
            id: index,
            item,
            onAddBtnClick,
            onFieldChange,
            onDeleteBtnClick
          };
          return <RegionInput {...props} />;
        })}
        <Grid className="text">
          <Typography>
            Please select network utilization parameters (all that apply)
          </Typography>
        </Grid>
        <div className="checkbox-container">

          <FormControlLabel
            control={
              <Checkbox
                path={networkUtilizationParameters.path}
                checked={networkUtilizationParameters.value.claim}
                type="checkbox"
                onChange={handleCheckboxChange}
                name="claim"
                color="primary"
              />
            }
            label="Claim"
          />
          <FormControlLabel
            control={
              <Checkbox
                path={networkUtilizationParameters.path}
                checked={networkUtilizationParameters.value.eligibility}
                type="checkbox"
                onChange={handleCheckboxChange}
                name="eligibility"
                color="primary"
              />
            }
            label="Eligibility"
          />
          <FormControlLabel
            control={
              <Checkbox
                path={networkUtilizationParameters.path}
                checked={networkUtilizationParameters.value.pharmacy}
                type="checkbox"
                onChange={handleCheckboxChange}
                name="pharmacy"
                color="primary"
              />
            }
            label="Pharmacy"
          />
          <FormControlLabel
            control={
              <Checkbox
                path={networkUtilizationParameters.path}
                checked={networkUtilizationParameters.value.pharmacyUtilization}
                type="checkbox"
                onChange={handleCheckboxChange}
                name="pharmacyUtilization"
                color="primary"
              />
            }
            label="Pharmacy Utilization"
          />
        </div>
        <Grid item xs={12}>
          <div className="description-field">
            <TextField
              label="Description"
              variant="outlined"
              placeholder="Type here..."
              className="field"
              size="small"
              path={description.path}
              value={description.value}
              onChange={(e) => {
                onFieldChange(description.path, e.target.value);
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NetworkModelInfo;
