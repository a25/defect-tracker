// import {onChange,onSubmit} from '../Actions/loginFormActions';
import {ON_LOGIN_FORM_CHANGE,ON_LOGIN_FORM_SUBMIT,SET_STORAGE_DATA,GET_STORAGE_DATA} from '../constants';
import setDB,{getData} from '../Utility/setDB';
let defaultLoginFormtate = {
    username:'',
    password:'',
    formDataValid: false
}

let validateForm = (state,event)=>{
    event.preventDefault();
    if((state.username=='tester' && state.password=='tester')||(state.username=='developer' && state.password=='developer')){
        return true;
        // setDB('user',state.username);
        // props.history.push('/defectTracker')
    }
    return false;
    // else{
    //     alert("INVALID CREDENTIALS");
    // }
   
}


export default (state={...defaultLoginFormtate},action)=>{
    switch(action.type){
        case ON_LOGIN_FORM_CHANGE:{
           return {...state, [action.data.target.name]:action.data.target.value}
        }
        case ON_LOGIN_FORM_SUBMIT : {
            return {...state,formDataValid:!!validateForm(state,action.data)}
        }
        // case SET_STORAGE_DATA: {
        //     debugger
        //     setDB(action.data.key,action.data.value);
        //     return state;
        // }
       
        default:{
            return state
        }
    }
}

