import React from 'react';
import Operation from './Operation';
import {getData} from '../Utility/setDB';
export default (props)=>{
    let user=getData('user');
    if(!user && props.match.path!='/login'){
        props.history.replace('/login');
       
    }
    else if(props.match.path=='/addDefect' && user!='tester'){
        props.history.replace('/login');
    }

    else if(props.match.path=='/defectTracker' && !user){
        props.history.replace('/login');
    }
    return (
    <div className="container-fluid border">
    <div className="text-center">
    <h1>Defect Tracker</h1>
    </div>
    <Operation show={props.show} {...props} user={user}/>
    {props.children}
    </div>)
}