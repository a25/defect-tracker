import React  from 'react';
import {logout} from '../Utility/setDB';
export default (props)=>{
    
    return (
        <div className={`text-center border-bottom ${!props.show?'hidden':''}`}>
        <div className="underline" onClick={()=>{logout();props.history.push('/logout')}}>Logout</div>
        <div><span className={props.user!='tester'?'hidden':'underline'} onClick={()=>props.history.push('/addDefect')}>Add Defect</span>&nbsp;&nbsp;<span className="underline" onClick={()=>props.history.push('/defectTracker')}>View Defect</span></div>
        </div>
    )
}