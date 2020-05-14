import React,{useState,useEffect} from 'react';
import Dropdown from "./Dropdown";
import Table from "./Table";
import Filter from '../Utility/filter';
import setDB,{getData} from '../Utility/setDB';
export default ()=>{
    let [defectData,setDefectData]=useState([]);
    let [originalData,setOriginalData]=useState([]);
    let [priority,setPriority]=useState('All');
    let [category,setCategory]=useState('All');
    let [hidden,setHidden]=useState(0);



    useEffect(()=>{

      let data1=getData('defects');
      if(!data1){
        setDB('defects');
      }
      let storageData =JSON.parse(window.sessionStorage.getItem('defects'));
      setDefectData(()=>{console.log('storageData...',storageData);return storageData});
      setOriginalData(storageData);
    },[])


    let changeStatus=(index)=>{
      let cpDefectData=Object.assign([],defectData)
      cpDefectData.some((data,id)=>{
        if(data.index==index){
          cpDefectData[id].Status=1;
          return true;
        }
      })
      let originalDataCpy=Object.assign([],originalData)
      
      originalDataCpy[index].Status=1;
      setDefectData(cpDefectData);
      setOriginalData(()=>{return originalDataCpy})
      setDB('defects',JSON.stringify(originalDataCpy));
    }

    useEffect(()=>{
      // console.log('........',defectData,originalData)
      let defectData1=Filter(originalData,priority,category);
      if(defectData1.length){
        setDefectData(defectData1);
        setHidden(0);
      }
      else{
        setDefectData([]);
        setHidden(1);
      }
      
    },[originalData,priority,category]);
      return (<>
        <div className="text-center pt-3 border-bottom">

          <h4>Filter Details</h4>
          <div>
            <label>Priority</label> &nbsp;&nbsp;
            <Dropdown name="priority" value={priority} setData={(e)=>setPriority(e.target.value)} className="" data={['All',1,2,3]} />
          </div>
          <div>
            <label>Category</label> &nbsp;&nbsp;
            <Dropdown name="category" value={category} className="" setData={(e)=>setCategory(e.target.value)} data={['All', 'UI', 'Functional', 'Change Request']} />
          </div>

        </div>
        <div className="col-sm-10 mx-auto text-center pt-3">
          <h5>Defect Details</h5>
          <h5 className="text-danger">Search Results: {defectData.length}</h5>
          <Table
            changeStatus={changeStatus}
            hidden={hidden}
            length={5}
            data={defectData}
          />
        </div>
     
      </>
      )
    // }
}