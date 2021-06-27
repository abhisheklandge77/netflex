import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import RegionInput from './RegionInput';
import "./component.scss";

function NetworkModelInfo(props) {
  const {
    title,
    networkTypes,
    networkProductType,
    networkIDType,
    idList,
  } = props;

  const [ items,setItems ] = React.useState([
      {regionType : [{type : 'Geographic',region : 'NorthEast'},{type :'ABC',region:'abc'},{type :'XYZ',region:'xyz'}]},
]);

  const onAddBtnClick =()=> {
      items.push(items[0]);
      setItems([...items]);
  }
  const onDeleteBtnClick =(id)=> {
    items.splice(id,1);
    setItems([...items]);
}
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
            <Grid item xs={6}>
              <TextField
                label="Network Model Name *"
                className="text-field"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={networkTypes}
                getOptionLabel={(type) => type.typeName}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Network Model Type *"
                    variant="outlined"
                    className="text-field"
                  />
                )}
              />
            </Grid>
          </div>
          <div className="container">
            <Grid item xs={6}>
              <Autocomplete
                options={networkProductType}
                getOptionLabel={(type) => type.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Network Product Change Type *"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Target Effective Date *"
                type="date"
                className="text-field"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </div>
          <div className="inline-text-fields">
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <TextField
                label="Network Product ID *"
                className="text-field"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField variant="outlined" type="file" />
            </Grid>
            <Grid><DeleteOutlineIcon /></Grid>
          </div>
          {
              items.map((item, index) => {
                  const props = {
                    id: index,
                    regionType : item.regionType,
                    region : item.regionType.region,
                    onAddBtnClick,
                    onDeleteBtnClick
                  }
                  return <RegionInput {...props}/>
              })
          }
          <Grid>
            <Typography>
              Please select network utilization parameters (all that apply)
            </Typography>
          </Grid>
          <div>
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
              <TextField
                label="Description"
                variant="outlined"
                placeholder="Type here..."
                className="text-field"
              />
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default NetworkModelInfo;
