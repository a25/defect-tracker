import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {onChange as onChangeData,onSubmit as onSubmitData} from '../Actions/loginFormActions';
import {setStorageData} from '../Actions/storageDataAction';
import setDB,{getData} from '../Utility/setDB';
import { useDispatch, useSelector } from "react-redux";
export let Login = (props)=>{
    // let [username,setUsername]=useState('');
    // let [password,setPassword]=useState('');
    let username = useSelector(state => state.login.username);
    let password = useSelector(state => state.login.password);
    let formDataValid = useSelector(state => state.login.formDataValid);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setStorageData({key:'role',value:JSON.stringify({tester:'tester',developer:'developer'})}))
        // setDB('role',JSON.stringify({tester:'tester',developer:'developer'}));
        // props.setStorageDataValue()
        if(getData('user')){
            alert('You are already logged in!!');
            props.history.push('/defectTracker');
            //you are logged in
        }
    },[]);
    useEffect(()=>{
        if(formDataValid){
            dispatch(setStorageData({key:'user',value:username}))
            props.history.push('/defectTracker')
        }
    },[formDataValid])

    let checkCredential = (event)=>{
        dispatch(onSubmitData(event))
        // props.onSubmitForm(event);
        // if(formDataValid){
        //     dispatch(setStorageData({key:'user',value:props.username}))
        //     // props.setStorageDataValue({key:'user',value:props.username});
        //     props.history.push('/defectTracker')
        // }
        // else {
        //     alert("INVALID CREDENTIALS");
        // }
        // e.preventDefault();
        // if((username=='tester' && password=='tester')||(username=='developer' && password=='developer')){
        //     setDB('user',username);
        //     props.history.push('/defectTracker')
        // }
        // else{
        //     alert("INVALID CREDENTIALS");
        // }
    }
    
        return (
            <>
            <div className="bg-primary text-center p-2 text-white">Login</div>
            <div className="border pt-3 m-auto col-sm-8">
                <form className="form form-horizontal" onSubmit={checkCredential}>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="username" id="username" onChange={(event)=>dispatch(onChangeData(event))} value={username} placeholder="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="password" id="password" onChange={(event)=>dispatch(onChangeData(event))} value={password} placeholder="password"/>
                    </div>
                </div>
                <div className="text-center mb-1"><button>Sign in</button></div>
                </form>
            </div>
            </>
        )
    
}

// let mapStateToProps = (state)=>{
//     return {
//         username:state.username,
//         password:state.password,
//         formDataValid:state.formDataValid
//     }
// }
// let mapActionToProps = (dispatch)=>{
//     return {
//         setUsername:(event)=>dispatch(onChangeData(event)),
//         setPassword:(event)=>dispatch(onChangeData(event)),
//         onSubmitForm:(event)=>dispatch(onSubmitData(event)),
//         setStorageDataValue:(data)=>dispatch(setStorageData(data))
//     }
// }
// export const Login=connect(mapStateToProps,mapActionToProps)(loginFormComponent)