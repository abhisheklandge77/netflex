import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, FormControlLabel } from "@material-ui/core";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PharmacyInformation from "./PharmacyInformation";
import "./component.scss";

function NetworkUtilizationParameter(props) {
  const { title1, title2, title3, buyerGroup, state } = props;

  const [items, setItems] = React.useState([
    {
      idType: [
        { type: "Geographic", region: "NorthEast" },
        { type: "ABC", region: "abc" },
        { type: "XYZ", region: "xyz" },
      ],
      pharmacyId: [{ id: "12345" }, { id: "23456" }, { id: "34567" }],
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
      <Grid className="network-utilization-container">
        <div className="title">
          <h2>{title1}</h2>
        </div>
        <div className="container">
          <Grid className="text-field">
            <TextField
              label="Network Product ID *"
              variant="outlined"
              className="field"
              size="small"
            />
          </Grid>
          <Grid className="text-field">
            <TextField
              label="Start Date - End Date *"
              type="date"
              className="field"
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </div>
        <div className="title">
          <h2>{title2}</h2>
        </div>
        <div className="container">
          <Grid className="text-field">
            <Autocomplete
              options={buyerGroup}
              getOptionLabel={(group) => group.name}
              className="field margin-field"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Buyer Group"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid className="text-field">
            <Autocomplete
              options={state}
              getOptionLabel={(state) => state.name}
              className="field margin-field"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="State *"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
        </div>
        <div className="container">
          <Grid className="text-field">
            <TextField
              label="Funding Type"
              variant="outlined"
              className="field"
              size="small"
            />
          </Grid>
          <Grid className="text-field">
            <TextField
              label="Region *"
              variant="outlined"
              className="field"
              size="small"
            />
          </Grid>
        </div>
        <div className="title">
          <h2>{title3}</h2>
        </div>
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
            label="Full Book Of Business"
          />
        </div>
        {items.map((item, index) => {
          const props = {
            id: index,
            idType: item.idType,
            pharmacyId: item.pharmacyId,
            onAddBtnClick,
            onDeleteBtnClick,
          };
          return <PharmacyInformation {...props} />;
        })}
      </Grid>
    </div>
  );
}

export default NetworkUtilizationParameter;
