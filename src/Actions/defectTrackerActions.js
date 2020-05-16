import {SET_DEFECT_PRIORITY,SET_DEFECT_CATEGORY,SET_DEFECT_DATA,SET_ORIGINAL_DATA} from '../constants';
import Filter from '../Utility/filter';
export const setPriority = (data)=>{
    return (dispatch,getState)=>{
        let state=getState();
        debugger
        let defectData=Filter(state.db.defects,data,state.tracker.category)||[];
        dispatch( {
            type: SET_DEFECT_PRIORITY,
            data: {defectData,priority:data}
        })
    }
   
}
export const setDefectCategory = (data) =>{
    return (dispatch,getState)=>{
        let state=getState();
        debugger
        let defectData=Filter(state.db.defects,state.tracker.priority,data)||[];
        dispatch( {
            type: SET_DEFECT_CATEGORY,
            data: {defectData,category:data}
        })
    }
}
export const setDefectData = (data) => {
    return {
        type: SET_DEFECT_DATA,
        data
    }
}

export const setOriginalData= (data) =>{
    return {
        type: SET_ORIGINAL_DATA,
        data
    }
}
