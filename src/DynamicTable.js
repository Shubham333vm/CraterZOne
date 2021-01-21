import React, { useState, useContext ,useEffect} from "react";
import stateContext from "./Context/stateContext";
import "./dynamicTable.css";
import Update from "./Update";

export default function DynamicTable() {
  const [state,dispatch] = useContext(stateContext)
  const [addRows, setaddRows] = useState([
    { disable: false, name: "", lat_lon: "", volume: "" },
  ]);
  const [checkStateIndex, setcheckState] = useState([]);

  function handleDynamicAddRow() {
    setaddRows([
      ...addRows,
      { disable: false, name: "", lat_lon: "", volume: "" },
    ]);
  }

  useEffect(() => {
    addRows.map((data, id) => {
    console.log("called")
      data.id=id;
      dispatch({
        type:"ADD_TO_LOCATION",
        location:data,
        index:id
      })
    });
    console.log(state)

    //state.filter(()=>())


  }, [addRows]);

  function handleDeleteRows() {
    console.log(checkStateIndex);
    const value = checkStateIndex?.forEach((row, index) => {
      console.log(row);
      const values = [...addRows];
      values.splice(row, 1);
      setaddRows(values);
      console.log(addRows);
      checkStateIndex.splice(index, 1);
      setcheckState(checkStateIndex);
      handleDeleteRows();
    });
    console.log(value);
  }

  const handleChangeInput = (index, event) => {
    console.log(index + "  and  " + event);
    var values = [...addRows];
    console.log(event.target.value);
    values[index][event.target.name] = event.target.value;
    setaddRows(values);
    //  values.push({'id':index})
    // console.log("values--------"+ {values})

    console.log(addRows);
  };

  const handleDynamicDeleteRow = (index) => {
    if (index === 0) {
    }
    const arrayCopy = addRows?.filter((row, rowIndex) => rowIndex !== index);

    setaddRows(arrayCopy);
  };
  const handleCheckValue = (index, event) => {
    const values = [...addRows];
    values[index][event.target.name] = event.target.checked;
    setcheckState([...checkStateIndex, index]);
  };
  return (
    <div className="container">
      {console.log("After")}
      <h1>Add rows</h1>
      <div className="">
        <input type="input" placeholder="Region"></input>
        <button onClick={handleDeleteRows}>Delete Selected</button>
      </div>
      <div>
        <table style={{ overflowX: "auto" }}>
          <div className="table-head">
            <h6>Disabled</h6>
            <h4>Name</h4>
            <h4>Latitude/Longitude</h4>
            <h4>Volume</h4>
            <h4>Action</h4>
          </div>
          {console.log(addRows)}
          <div>
            {addRows.map((inputField, index) => {
              return (
                <div>
                  {console.log({ inputField })}
                  <div>
                    <tbody>
                      <tr className="table-data">
                        <td>
                          <input
                            name="disable"
                            className="table-input"
                            type="checkbox"
                            checked={inputField.disable}
                            onChange={(event) => handleCheckValue(index, event)}
                          ></input>
                        </td>
                        <td>
                          <input
                            name="name"
                            className="table-input"
                            type="input"
                            value={inputField.name}
                            onChange={(event) =>
                              handleChangeInput(index, event)
                            }
                          />
                        </td>
                        <td>
                          <input
                            name="lat_lon"
                            className="table-input"
                            type="input"
                            value={inputField.lat_lon}
                            onChange={(event) =>
                              handleChangeInput(index, event)
                            }
                          />
                        </td>
                        <td>
                          <input
                            name="volume"
                            className="table-input"
                            type="input"
                            value={inputField.volume}
                            onChange={(event) =>
                              handleChangeInput(index, event)
                            }
                          ></input>
                        </td>
                        <td>
                          <button
                            className="table-input"
                            onClick={handleDynamicAddRow}
                          >
                            Add
                          </button>
                          <button
                            className="table-input"
                            onClick={(event) => handleDynamicDeleteRow(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              );
            })}
          </div>
        </table>
      </div>
    </div>
  );
}
