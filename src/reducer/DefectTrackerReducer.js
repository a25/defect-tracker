import {SET_DEFECT_PRIORITY,SET_DEFECT_CATEGORY,SET_DEFECT_DATA,SET_ORIGINAL_DATA} from '../constants';
const defaultState ={
    defectData:[],
    priority:'All',
    category:'All'
}


export default (state=defaultState,action)=>{

        switch(action.type){
            case SET_DEFECT_PRIORITY:{
                // let defectData=Filter(state.originalData,action.data,state.category);
                return {...state,"priority":action.data.priority,"defectData":action.data.defectData};
            }
            case SET_DEFECT_CATEGORY: {
                // let defectData=Filter(state.originalData,state.priority,action.data);
                return {...state,"category":action.data.category,"defectData":action.data.defectData};
            }
            case SET_DEFECT_DATA: {
                return {...state,"defectData":action.data.defectData}
            }
            // case SET_ORIGINAL_DATA: {
            //     return {...state,"originalData":action.data.originalData}
            // }

            default : {
                return state;
            }
        }
}