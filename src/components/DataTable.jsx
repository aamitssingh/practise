import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DataTable.css";

const DataTable = ({ tableData, setTableData }) => {
  const [editData, setEditData] = useState({});
  const [taskNo, setTaskNo] = useState();
  const [projectName, setProjectName] = useState();
  const [taskName, setTaskName] = useState();
  const [checkValue, setCheckValue] = useState([]);

  const handleDelete = (id) => {
    const newData = tableData.filter((item) => item.id !== id);
    setTableData(newData);
  };

  const handleUpdate = () => {
    const index = tableData.findIndex((items) => items.id === editData.id);

    const newData = [...tableData];
    const newEditData = {
      id: editData.id,
      tickNo: taskNo,
      pName: projectName,
      taskName: taskName,
    };
    newData.splice(index, 1, newEditData);
    // console.log(newData)
    setTableData(newData);
    setEditData({});
  };

  const handleCheckBox = (id) => {
    // setIsCheked(!isChecked)
    setCheckValue([...checkValue, id]);
  };

  const handleCheckDelete = () => {
    const data = tableData.filter((item) => {
      if (!checkValue.includes(item.id)) {
        return item;
      }
    });
    console.log(data);
    setTableData(data);
  };

  return (
    <div>
      <div
        style={{ width: "97%", display: "flex", justifyContent: "end" }}
        className="mt-3 mb-2"
      >
        <Link to="/form">
          <Button>Add New Data</Button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <Button onClick={handleCheckDelete}>Delete</Button>
            </th>
            <th>Ticket No.</th>
            <th>Project Name</th>
            <th>Task No.</th>
            <th>
              <Button
                className="btn btn-danger"
                onClick={() => setTableData([])}
              >
                Delete All
              </Button>
            </th>
          </tr>
        </thead>
        {tableData &&
          tableData.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    value={item.id}
                    onClick={() => handleCheckBox(item.id)}
                  />
                </td>
                {editData?.id === item.id ? (
                  <>
                    <td>
                      <input
                        type="number"
                        // value={taskNo}
                        onChange={(e) => setTaskNo(e.target.value)}
                      />
                    </td>
                    <td>
                      <DropdownButton id="dropdown-basic-button" title="Select">
                        <Dropdown.Item onClick={() => setProjectName("A")}>
                          A
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setProjectName("B")}>
                          B
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setProjectName("C")}>
                          C
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setProjectName("D")}>
                          D
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                    <td>
                      <DropdownButton id="dropdown-basic-button" title="Select">
                        <Dropdown.Item onClick={() => setTaskName("E")}>
                          E
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setTaskName("F")}>
                          F
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setTaskName("G")}>
                          G
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setTaskName("H")}>
                          H
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.tickNo}</td>
                    <td>{item.pName}</td>
                    <td>{item.taskName}</td>
                  </>
                )}
                <td>
                  <button
                    className=" btn btn-danger"
                    style={{ marginRight: "4px" }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      if (editData.id === item.id) {
                        handleUpdate();
                      } else {
                        setEditData(item);
                      }
                    }}
                  >
                    {editData.id === item.id ? "Update" : "Edit"}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default DataTable;
