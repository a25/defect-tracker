import React from "react";

export default function Table(props) {
  let vals = [];
  let length = props.length;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
        {vals}

        <th className="bg-primary text-white">Defect Category</th>
        <th className="bg-primary text-white">Desciption</th>
        <th className="bg-primary text-white">Priority</th>
        <th className="bg-primary text-white">Status</th>
        <th className="bg-primary text-white">Change Status</th>
        </tr>
      </thead>
      <tbody className={props.hidden?'hidden':''}>
        
        {
        
        props.data.map((info,id) => {
          let tds = [];
          let i = -1;
          // console.log(info)
          for (let property of ['Defect Category','Desciption','Priority','Status','Change Status']) {
            i++;
            if (i < length - 2) {
              tds.push(<td className="bg-light" key={"td_" + i}>{info[property]}</td>);
            } else {
              tds.push(
                <td className="bg-light" key={"td_" + i}>
                  <span
                    className={`${info[property] ? "hidden" : ""}`}
                  >
                    Open
                  </span>
                  <span className={!info[property] ? "hidden" : ""}>
                    Closed
                  </span>
                </td>
                
              );
              tds.push(
                <td className="bg-light" key={"td_" + i+1}>
                  <span onClick={()=>props.changeStatus(info.index)}
                    className={`underline ${info[property] ? "hidden" : ""}`}
                  >
                    Close Defect
                  </span>
                  <span className={!info[property] ? "hidden" : ""}>
                    No actions pending
                  </span>
                </td>
              )
              break;
            }
          }
       
          return <tr key={"tr_" + id}>{tds}</tr>;
        })}
      </tbody>
    </table>
  );
}
