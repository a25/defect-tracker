import React ,{useState,useEffect} from 'react';
import Dropdown from "./Dropdown";
import setDB,{getData} from '../Utility/setDB';
export default (props) =>{
    let [category,setCategoryValue]=useState('UI');
    let [description,setDescription] = useState('');
    let [priority,setPriority] = useState(1);
    
    let addDefect =(e)=>{
        let DefectData=getData('defects');
        e.preventDefault();
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
            "index":DefectData?JSON.parse(DefectData).length:0
        }
        
        if(DefectData){
            let a=JSON.parse(DefectData)
            a.push(defect)
            setDB('defects',JSON.stringify(a))
        }
        else{
            setDB('defects',JSON.stringify([defect]))
        }
        alert('Defect added successfully !!!');
        props.history.push('/defectTracker')
    }
    let setCategory=(e)=>{
        setCategoryValue(e.target.value)
    }
    return(
       
        <form className="form form-horizontal col-sm-6 mx-auto" >
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Category</label>
                <Dropdown name="category" className="form-control col-sm-8" value={category}  setData={setCategory} data={['UI', 'Functional', 'Change Request']} />
            </div>
        
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <textarea required rows="3" cols="20"  className="form-control col-sm-8" onBlur={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-group row">
                    <label htmlFor="priority" className="col-sm-2 col-form-label">Priority</label>
                    {/* <div className="col-sm-3"> */}
                    <input type="number"  className="form-control col-sm-8" min='1' max='3' onChange={(e)=>setPriority(e.target.value)} value={priority} />
                    {/* </div> */}
            </div>
            <div className="text-center col-sm-8">
                <button type="submit" className='btn btn-primary cursor-pointer' onClick={(e)=>addDefect(e)}>Add Defect</button>
            </div>
        </form>
       
    )
}