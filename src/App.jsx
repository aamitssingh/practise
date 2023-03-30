import FormValidation from "./components/FormValidation"
import React, {useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DataTable from "./components/DataTable"
function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTable tableData={tableData} setTableData={setTableData}/>} />
        <Route path="/form" element={<FormValidation tableData={tableData} setTableData={setTableData} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
