import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addData } from "../Redux/DATA/data.api";
import React from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (name === "" || mail === "" || details === "") {
      alert("Please fill all details !");
      return false;
    }
    const payload = {
      name: name,
      mail: mail,
      details: details,
      id: uuid(),
    };
    const addDetailAction = addData(payload);
    dispatch(addDetailAction);
    props.onHide();
    setName("");
    setMail("");
    setDetails("")
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
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
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function DataInput() {
  const [modalShow, setModalShow] = useState(false);
  //   const [name, setName] = useState("");
  //   const [mail, setMail] = useState("");
  //   const [details, setDetails] = useState("");

  //   const dispatch = useDispatch();

  //   const handleClick = () => {
  //     if(name === ""|| mail === ""|| details === ""){
  //         alert("Please fill all details !")
  //         return false
  //     }
  //     const payload = {
  //       name: name,
  //       mail: mail,
  //       details: details,
  //       id: uuid(),
  //     };
  //     const addDetailAction = addData(payload);
  //     dispatch(addDetailAction);
  //   };

  return (
    <div
      style={{
        width: "10%",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      {/* <Form>
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
      </Form> */}

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
