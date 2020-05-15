import {SET_DEFECT_PRIORITY,SET_DEFECT_CATEGORY,SET_DEFECT_DATA,SET_ORIGINAL_DATA} from '../constants';
export const setPriority = (data)=>{
    return {
        type: SET_DEFECT_PRIORITY,
        data
    }
}
export const setDefectCategory = (data) =>{
    return {
        type: SET_DEFECT_CATEGORY,
        data
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
