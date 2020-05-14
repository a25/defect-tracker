import React,{useState,useEffect} from 'react';
import setDB,{getData} from '../Utility/setDB';
export default (props)=>{
    let [username,setUsername]=useState('');
    let [password,setPassword]=useState('');
    useEffect(()=>{
        setDB('role',JSON.stringify({tester:'tester',developer:'developer'}));
        if(getData('user')){
            alert('You are already logged in!!');
            props.history.push('/defectTracker');
            //you are logged in
        }
    },[])

    let checkCredential = (e)=>{
        e.preventDefault();
        if((username=='tester' && password=='tester')||(username=='developer' && password=='developer')){
            setDB('user',username);
            props.history.push('/defectTracker')
        }
        else{
            alert("INVALID CREDENTIALS");
        }
    }
    
        return (
            <>
            <div className="bg-primary text-center text-white">Login</div>
            <div className="border pt-3 m-auto col-sm-8">
                <form className="form form-horizontal" onSubmit={checkCredential}>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"/>
                    </div>
                </div>
                <div className="text-center mb-1"><button>Sign in</button></div>
                </form>
            </div>
            </>
        )
    
}