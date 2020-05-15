import {SET_STORAGE_DATA,GET_STORAGE_DATA} from '../constants';
export default (state={},action) =>{
    switch (action.type){
        case SET_STORAGE_DATA:{
            return {...state,[action.data.key]:action.data.value}
        }
        default: {
            return state;
        }
    }
}