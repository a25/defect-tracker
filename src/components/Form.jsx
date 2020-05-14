import React from 'react';
import setDB,{getData} from '../Utility/setDB';
export default class Form extends React.Component{
    constructor(props){
        super(props);
       
        setDB('role',JSON.stringify({tester:'tester',developer:'developer'}));
        if(getData('user')){
            //you are logged in
        }
        this.state={username:'',password:''}
    }
    onChangeData = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    check = (e)=>{
        e.preventDefault();
        if((this.state.username=='tester' && this.state.password=='tester')||(this.state.username=='developer' && this.state.password=='developer')){
            // this.props.setLoginUser(this.state.username)
            setDB('user',this.state.username);
            this.props.history.push('/defectTracker')
        }
        else{
            alert("INVALID CREDENTIALS")
        }
    }
    render(){
        return (
            <>
            <div className="bg-primary text-center text-white">Login</div>
            <div className="border pt-3 m-auto col-sm-8">
                <form className="form form-horizontal" onSubmit={this.check}>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="username" id="username" onChange={this.onChangeData} value={this.state.username} placeholder="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="password" id="password" onChange={this.onChangeData} value={this.state.password} placeholder="password"/>
                    </div>
                </div>
                <div className="text-center mb-1"><button>Sign in</button></div>
                </form>
            </div>
            </>
        )
    }
}