import {SET_STORAGE_DATA,GET_STORAGE_DATA} from '../constants';
let defaultState={user:'',role:''}
export default (state=defaultState,action) =>{
    switch (action.type){
        case SET_STORAGE_DATA:{
            
          
            if(action.data.key!='user'){
                return {...state,[action.data.key]:JSON.parse(action.data.value)}
            }
           return {...state,[action.data.key]:action.data.value}
        }
        default: {
            return state;
        }
    }
}