import React from "react";

function Dropdown(props) {
  return (
    <select name={props.name} value={props.value} onChange={(e)=>props.setData(e)} className={`dropdown ${props.className}`}>
      {props.data.map((elem, id) => {
        return <option value={elem} key={id}>{elem}</option>;
      })}
    </select>
  
  );
}

export default Dropdown;
