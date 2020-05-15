import {SET_DEFECT,SET_DEFECT_CATEGORY_DATA,SET_DEFECT_PRIORITY_DATA,SET_DESCRIPTION_DATA} from '../constants';

let defaultState = {
    category:'UI',
    description:'',
    priority: 1
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case SET_DEFECT_CATEGORY_DATA:{
            return {...state,"category":action.data.target.value}
        }
        case SET_DEFECT_PRIORITY_DATA: {
            return {...state,"priority":action.data.target.value}
        }  
        case SET_DESCRIPTION_DATA: {
            return {...state,"description":action.data.target.value}
        }
        default: {
            return state
        }
    }

}