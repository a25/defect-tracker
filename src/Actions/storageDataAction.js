import {SET_STORAGE_DATA,GET_STORAGE_DATA} from '../constants';
import setDB,{getData} from '../Utility/setDB';
export const setStorageData = (data)=>{
    return (dispatch,getState) => {
        setDB(data.key,data.value)
        let cpData={key:data.key,value:getData(data.key)}
        dispatch({
            type: SET_STORAGE_DATA,
            data:cpData
        })
    }
   
}

export const getStorageData = ()=>{
    return {
        type: GET_STORAGE_DATA
    }
}