import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container,Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./FormValidation.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid'

const FormValidation = ({ tableData, setTableData }) => {
  const [tickNo, setTicketNo] = useState();
  const [pName, setPName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [ticketValid, setTicketValid] = useState(false);
  const [projectNameValid, setprojetNameValid] = useState(false)
  const [taskNameValid, setTaskNameValid] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!tickNo && !pName && !taskName){
      console.log("Submit runs")
    }else{
      if (tickNo.length < 3) {
        setTicketValid(true);
        return
      } else {
        setTicketValid(false);
      }
      if(pName===""){
        setprojetNameValid(true)
        return
      }else{
        setprojetNameValid(false)
      }
      if(taskName===""){
        setTaskNameValid(true)
        return
      }else{
        setTaskNameValid(false)
      }
  
     setTableData([...tableData,{
      id:nanoid(),
      tickNo: tickNo,
      pName: pName,
      taskName: taskName
     }])
    
     
      // axios.post('/', data)
      
  
      setTicketNo("");
      setPName("");
      setTaskName("");
      navigate("/");
    }
    
  };
  
  console.log(tableData)

  const handleProjectName = (e) => {
    setPName(e.target.value);
    
  };
  const handleTaskName = (e) => {
    setTaskName(e.target.value);
    
  };
  const handleTicketNo = (e) => {
    if (!isNaN(e.target.value)) {
      setTicketNo(e.target.value);
    }
  };
  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ticket">Ticket No</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              // value={tickNo}
              onChange={handleTicketNo}
            />
            {ticketValid && (
              <p style={{ color: "red" }}>Enter 3 digit number**</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="project-name">Project Name</Form.Label>
            <Form.Select value={pName} onChange={handleProjectName}>
              <option value={""}></option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"C"}>C</option>
              <option value={"D"}>D</option>
            </Form.Select>
            {projectNameValid && <p style={{color: 'red'}}>Must be Seleted**</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="task-name">Task Name</Form.Label>
            <Form.Select value={taskName} onChange={handleTaskName}>
              <option value={""}></option>
              <option value={"E"}>E</option>
              <option value={"F"}>F</option>
              <option value={"G"}>G</option>
              <option value={"H"}>H</option>
            </Form.Select>
            {taskNameValid && <p style={{color: 'red'}}>Must be Seleted**</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="time">Time</Form.Label>
            <Form.Control type="time" label="Check me out" />
          </Form.Group>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <Button variant="primary" type="submit">
                &larr; Back to Homepage
              </Button>
            </Link>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default FormValidation;
