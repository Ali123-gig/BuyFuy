import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../Button/Button";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./AddressModalForm.css";

const AddressModalForm = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <ModalContainer>
      <form className="address-form-modal center">
        <div className="address-form-field">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="name"
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="address"
          />
          <TextField
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="contact"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            style={{ width: "100%" }}
            label="email"
          />
        </div>
        <Button style={{marginTop:"2em"}}>Proceed && Pay </Button>
      </form>
    </ModalContainer>
  );
};

export default AddressModalForm;
