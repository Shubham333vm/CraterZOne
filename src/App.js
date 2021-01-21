import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DynamicTable from "./DynamicTable";
import MapContainer from "./MapContainer";

function App() {
  const [dynamicTable, setdynamicTable] = useState([<DynamicTable />]);

  function addDynamicTables(){
    setdynamicTable([...dynamicTable,<DynamicTable />])
  }


  return (
    <div >
     {/* <MapContainer/> */}
      <button onClick={addDynamicTables}>Add Table </button> 
       {dynamicTable.map((table)=> {return table})} 
    </div>
  );
}

export default App;
