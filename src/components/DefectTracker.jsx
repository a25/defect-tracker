import React,{useState,useEffect, useRef} from 'react';
import Dropdown from "./Dropdown";
import Table from "./Table";
// import Filter from '../Utility/filter';
import setDB,{getData} from '../Utility/setDB';
import {useSelector,useDispatch,shallowEqual} from 'react-redux';
import { setPriority,setDefectCategory,setDefectData} from '../Actions/defectTrackerActions';
import {setStorageData} from '../Actions/storageDataAction';

export default ()=>{
    const dispatch = useDispatch();
    let {defectData,priority,category}=useSelector((state)=>{
        return {
          defectData:state.tracker.defectData,
          // originalData:state.tracker.originalData,
          priority:state.tracker.priority,
          category:state.tracker.category
        }
    },shallowEqual);
    let {defects} = useSelector((state)=> ({defects:state.db.defects}));

    useEffect(()=>{
      if(!getData('defects')){
        dispatch(setStorageData({key:'defects'}));
      }
      else{
        dispatch(setStorageData({key:'defects',value:getData('defects')}));
      }
     
    },[])

    useEffect(()=>{
      dispatch(setPriority(priority));
    },[defects])
   


    let changeStatus=(index)=>{
      let cpDefectData=Object.assign([],defectData)
      cpDefectData.some((data,id)=>{
        if(data.index==index){
          cpDefectData[id].Status=1;
          return true;
        }
      })
      let originalDataCpy=Object.assign([],defects)
      
      originalDataCpy[index].Status=1;
     
      dispatch(setStorageData({key:'defects',value:JSON.stringify(originalDataCpy)}))
     
    }



      return (<>
        <div className="text-center pt-3 border-bottom">

          <h4>Filter Details</h4>
          <div>
            <label>Priority</label> &nbsp;&nbsp;
            <Dropdown name="priority" value={priority} setData={(e)=> dispatch(setPriority(e.target.value))} className="" data={['All',1,2,3]} />
          </div>
          <div>
            <label>Category</label> &nbsp;&nbsp;
            <Dropdown name="category" value={category} className="" setData={(e)=>dispatch(setDefectCategory(e.target.value))} data={['All', 'UI', 'Functional', 'Change Request']} />
          </div>

        </div>
        <div className="col-sm-10 mx-auto text-center pt-3">
          <h5>Defect Details</h5>
          <h5 className="text-danger">Search Results: {defectData.length}</h5>
          <Table
            changeStatus={changeStatus}
            hidden={!defectData.length}
            length={5}
            data={defectData}
          />
        </div>
     
      </>
      )
    // }
}