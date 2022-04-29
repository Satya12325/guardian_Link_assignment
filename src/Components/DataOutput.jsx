import Table from "react-bootstrap/Table";
import { get_dataapi, Put_api } from "../Redux/DATA/data.api";
import { delete_api } from "../Redux/DATA/data.api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();
  const id = props.id;
  const handleClick = (id) => {
    const payload = {
      id: id,
      name: name,
      mail: mail,
      details: details,
    };
    dispatch(Put_api({ id, payload }));
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <input
          style={{margin:"10px"}}
          placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
          style={{margin:"10px"}}
          placeholder="Enter your email"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
          style={{margin:"10px"}}
          placeholder="Enter your Details"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <Button onClick={() => handleClick(id)}>Submit</Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function DataOutput() {
  const datas = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
    const [state,setState]= useState("all")
    const [data,setData]=useState("")
    console.log(state,"state")
  
  const getData = () => {
    dispatch(get_dataapi());
  };
  useEffect(() => {
    getData();
    setState(datas)
  }, [ dispatch]);
  const [modalShow, setModalShow] = useState(false);
  console.log(datas);
  return (
    <div style={{width:"90%", margin: "auto"}}>
        <div style={{margin: "5px",display: "flex",gap:"1rem"}}>
        <input type="text"
        value={data}
        onChange={(e)=>setData(e.target.value)}
        />
        
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>sl. no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {datas
          .filter((item) => {
            if (data === "") {
              return item;
            } else if (item.name.toLowerCase().includes(data.toLowerCase())) {
              return item;
            }
          })
          .map((datas, i) => {
              

                  return (
                    <tr key={datas.id}>
                      <td>{i + 1}</td>
                      <td>{datas.name}</td>
                      <td>{datas.mail}</td>
                      <td>{datas.details}</td>
                      <td
                        style={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Button onClick={() => setModalShow(true)}>Edit</Button>
                        <Button onClick={() => dispatch(delete_api(datas.id))}>
                          Delete
                        </Button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          id={datas.id}
                        />
                      </td>
                    </tr>
                  );
              
             
          })}
        </tbody>
      </Table>
    </div>
  );
}
