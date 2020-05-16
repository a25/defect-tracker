import React ,{useState,useEffect} from 'react';
import Dropdown from "./Dropdown";
import setDB,{getData} from '../Utility/setDB';
import {setStorageData} from '../Actions/storageDataAction';
import {shallowEqual,useSelector,useDispatch} from 'react-redux';
import {setCategory,setPriority,setDescription} from '../Actions/addDefetActions'
export default (props) =>{

    let dispatch = useDispatch();
    let {category,description,priority,defects} = useSelector((state)=>{
        debugger
        return {
            category: state.defect.category,
            description: state.defect.description,
            priority: state.defect.priority,
            defects: state.db.defects
        }

    },shallowEqual);
    
    useEffect(()=>{
        dispatch(setStorageData({key:'defects',value:getData('defects')}));
    },[])
    let addDefectData =(e)=>{
        e.preventDefault();
        // let DefectData=getData('defects');
        if(!description){
            alert('Please fill up discription');
            return ;
        }
         let defect = {
            "Defect Category": category,
            "Desciption": description,
            "Priority": priority,
            "Status": 0,
            "Change Statue":0,
            "index":defects?defects.length:0
        }
        
        if(defects){
            
            dispatch(setStorageData({key:'defects',value:JSON.stringify([...defects,defect])}))
            
        }
        else{
            dispatch(setStorageData({key:'defects',value:JSON.stringify([defect])}))
            
        }
        alert('Defect added successfully !!!');
        props.history.push('/defectTracker')
    }

    return(
       
        <form className="form form-horizontal col-sm-6 mx-auto" >
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Category</label>
                <Dropdown name="category" className="form-control col-sm-8" value={category}  setData={(e)=>dispatch(setCategory(e))} data={['UI', 'Functional', 'Change Request']} />
            </div>
        
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <textarea required rows="3" cols="20"  className="form-control col-sm-8" onBlur={(e)=>dispatch(setDescription(e))}></textarea>
            </div>
            <div className="form-group row">
                    <label htmlFor="priority" className="col-sm-2 col-form-label">Priority</label>
                    {/* <div className="col-sm-3"> */}
                    <input type="number"  className="form-control col-sm-8" min='1' max='3' onChange={(e)=>dispatch(setPriority(e))} value={priority} />
                    {/* </div> */}
            </div>
            <div className="text-center col-sm-8">
                <button type="submit" className='btn btn-primary cursor-pointer' onClick={(e)=>addDefectData(e)}>Add Defect</button>
            </div>
        </form>
       
    )
}