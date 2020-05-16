import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {onChange as onChangeData,onSubmit as onSubmitData} from '../Actions/loginFormActions';
import {setStorageData} from '../Actions/storageDataAction';
import setDB,{getData} from '../Utility/setDB';
import { useDispatch, useSelector } from "react-redux";
export let Login = (props)=>{
    let user = useSelector(state=>state.db.user)
    let username = useSelector(state => state.login.username);
    let password = useSelector(state => state.login.password);
    let formDataValid = useSelector(state => state.login.formDataValid);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(getData('user')){
            dispatch(setStorageData({key:'user',value:getData('user')}));
            alert('You are already logged in!!');
            props.history.push('/defectTracker');
        }
        dispatch(setStorageData({key:'role',value:JSON.stringify({tester:'tester',developer:'developer'})}))
        
    },[]);
    useEffect(()=>{
        if(formDataValid){
            dispatch(setStorageData({key:'user',value:username}))
            props.history.push('/defectTracker')
        }
    },[formDataValid])

    let checkCredential = (event)=>{
        dispatch(onSubmitData(event))
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
