import {ON_LOGIN_FORM_CHANGE,ON_LOGIN_FORM_SUBMIT} from '../constants';
export let onChange=(data)=>{
    return {
        type: ON_LOGIN_FORM_CHANGE,
        data
    }
} 

export let onSubmit = (data)=>{
    return {
        type:ON_LOGIN_FORM_SUBMIT,
        data
    }
}