import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RegionInput from "./RegionInput";
import "./component.scss";

function NetworkModelInfo(props) {
  const { title, networkTypes, networkProductType, networkIDType, idList } =
    props;

  const [items, setItems] = React.useState([
    {
      regionType: [
        { type: "Geographic", region: "NorthEast" },
        { type: "ABC", region: "abc" },
        { type: "XYZ", region: "xyz" },
      ],
    },
  ]);

  const onAddBtnClick = () => {
    items.push(items[0]);
    setItems([...items]);
  };
  const onDeleteBtnClick = (id) => {
    items.splice(id, 1);
    setItems([...items]);
  };
  const [checked, setChecked] = React.useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Grid container className="network-model-container">
        <Grid className="title">
          <h2>{title}</h2>
        </Grid>
        <Grid className="main-container">
          <div className="container">
            <Grid item xs={7}>
              <div className="text-field">
                <TextField
                  label="Network Model Name *"
                  variant="outlined"
                  className="field"
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="text-field">
                <Autocomplete
                  options={networkTypes}
                  className="field"
                  getOptionLabel={(type) => type.typeName}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Network Model Type *"
                      variant="outlined"
                    />
                  )}
                />
              </div>
            </Grid>
          </div>
          <div className="container">
            <Grid item xs={7}>
              <div className="text-field">
                <Autocomplete
                  options={networkProductType}
                  getOptionLabel={(type) => type.name}
                  className="field"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Network Product Change Type *"
                      variant="outlined"
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="text-field">
                <TextField
                  label="Target Effective Date *"
                  type="date"
                  className="field"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </Grid>
          </div>
          <div className="inline-text-fields">
            <Grid item xs={4}>
              <Autocomplete
                options={networkIDType}
                getOptionLabel={(idType) => idType.type}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Network ID Type *"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Network Product ID *"
                className="text-field"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={idList}
                getOptionLabel={(list) => list.id}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="List ID(s)"
                    className="list-input"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                type="file"
                className="file-input"
              />
            </Grid>
            <Grid>
              <DeleteOutlineIcon />
            </Grid>
          </div>
          {items.map((item, index) => {
            const props = {
              id: index,
              regionType: item.regionType,
              region: item.regionType.region,
              onAddBtnClick,
              onDeleteBtnClick,
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
                  checked={checked}
                  onChange={handleChange}
                  name="Claim"
                  color="primary"
                />
              }
              label="Claim"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="Claim"
                  color="primary"
                />
              }
              label="Eligibility"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="Claim"
                  color="primary"
                />
              }
              label="Pharmacy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="Claim"
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
              className="description"
            />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default NetworkModelInfo;
