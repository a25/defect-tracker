import React from 'react';
import Dropdown from "./Dropdown";
import Table from "./Table";
import Filter from '../Utility/filter';
import setDB,{getData} from '../Utility/setDB';
export default class DefectTracker extends React.Component{
    isLoading;
    constructor(props){
      super(props);
      let data1=getData('defects');
      debugger
      if(!data1){
        debugger
        setDB('defects');
      }
      this.isLoading=true;
      this.state={
        priority:'All',
        category:'All',
        hidden:0,
        originalData:[],
        defectData:[]
      }
    }

    // {
    //   "Defect Category": "Change Request",
    //   "Desciption": "Add remove user functionality",
    //   "Priority": 3,
    //   "Status": 1,
    //   "Change Statue":0
    // }
    setSessionData = (data)=>{
      data=JSON.stringify(data);
      window.sessionStorage.setItem('defects',data)
    }
    
    // getSessionData = () => window.sessionStorage.getItem('defects');

    componentDidMount(){
      let storageData =JSON.parse(window.sessionStorage.getItem('defects'));
      console.log(storageData)
      this.setState({defectData:storageData,originalData:storageData})
    }

    changeStatus=(index)=>{
      let cpDefectData=Object.assign([],this.state.defectData)
      cpDefectData.some((data,id)=>{
        if(data.index==index){
          cpDefectData[id].Status=1;
          return true;
        }
      })
      let originalData=Object.assign([],this.state.originalData)
      
      originalData[index].Status=1;
      
      this.setState({defectData: cpDefectData,originalData},()=>{
        console.log(this.state.defectData,this.state.originalData)
        this.setSessionData(this.state.originalData);
      })
    }

    setData = (event)=>{
      const value=event.target.value;
      const name=event.target.name;
      this.setState({[name]:value},()=>{
        let {priority,category}=this.state;
        let defectData=Filter(this.state.originalData,priority,category)
        if(defectData.length){
          this.setState({hidden:0,defectData})
        }
        else {
          this.setState({hidden:1,defectData:[]})
        }
          
      })
    }

    render(){
      return (<>
     
        {/* <div className="text-center border-bottom">
          <h1>Defect Tracker</h1>
          <div className="underline">Logout</div>
          <div><span className={this.state.user!='tester'?'hidden':'underline'}>Add Defect</span>&nbsp;&nbsp;<span className="underline">View Defect</span></div>
        </div> */}
        <div className="text-center pt-3 border-bottom">

          <h4>Filter Details</h4>
          <div>
            <label>Priority</label> &nbsp;&nbsp;
            <Dropdown name="priority" value={this.state.priority} setData={this.setData} className="" data={['All',1,2,3]} />
          </div>
          <div>
            <label>Category</label> &nbsp;&nbsp;
            <Dropdown name="category" value={this.state.category} className="" setData={this.setData} data={['All', 'UI', 'Functional', 'Change Request']} />
          </div>

        </div>
        <div className="text-center pt-3">
          <h5>Defect Details</h5>
          <h5 className="text-danger">Search Results: {this.state.defectData.length}</h5>
          <Table
            changeStatus={this.changeStatus}
            hidden={this.state.hidden}
            length={5}
            data={this.state.defectData}
          />
        </div>
     
      </>
      )
    }
}