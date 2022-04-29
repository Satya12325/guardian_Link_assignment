import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addData } from "../Redux/DATA/data.api";
import React from "react";
import { useDispatch } from "react-redux";

export default function DataInput() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();
    
  const handleClick = () => {
    if(name === ""|| mail === ""|| details === ""){
        alert("Please fill all details !")
        return false
    }
    const payload = {
      name: name,
      mail: mail,
      details: details,
      id: uuid(),
    };
    const addDetailAction = addData(payload);
    dispatch(addDetailAction);
  };

  return (
    <div style={{width:"80%", margin: "auto",marginTop:"20px", marginBottom:"30px"}}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
