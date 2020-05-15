import {SET_DEFECT_PRIORITY,SET_DEFECT_CATEGORY,SET_DEFECT_DATA,SET_ORIGINAL_DATA} from '../constants';
import Filter from '../Utility/filter';
const defaultState ={
    defectData:[],
    originalData:[],
    priority:'All',
    category:'All'
}


export default (state=defaultState,action)=>{
    console.log('calleed.................  ',action.type);
        switch(action.type){
            case SET_DEFECT_PRIORITY:{
                let defectData=Filter(state.originalData,action.data,state.category);
                return {...state,"priority":action.data,"defectData":defectData||[]};
            }
            case SET_DEFECT_CATEGORY: {
                let defectData=Filter(state.originalData,state.priority,action.data);
                return {...state,"category":action.data,"defectData":defectData||[]};
            }
            case SET_DEFECT_DATA: {
                return {...state,"defectData":action.data.defectData}
            }
            case SET_ORIGINAL_DATA: {
                return {...state,"originalData":action.data.originalData}
            }

            default : {
                return state;
            }
        }
}