import React,{useState, useEffect} from "react";
import "./styles.css";
import Form from './components/Form'
import DefectTracker from "./components/DefectTracker";
import Wrapper from "./components/Wrapper";
import Logout from './components/Logout'
import Test from './components/Test';
import AddDefect from './components/AddDefect';
import {BrowserRouter,Route} from 'react-router-dom';
export default function App() {
   return (
    
    <BrowserRouter>
 
        <Route path="/login" render={(props)=><Wrapper {...props } show={false}><Form {...props}/></Wrapper>} exact />
        <Route path="/defectTracker" render={(props)=><Wrapper {...props } show={true}><DefectTracker /></Wrapper>} exact />
        <Route path="/addDefect" render={(props)=><Wrapper {...props } show={true}><AddDefect {...props}/></Wrapper>} exact/>
        <Route path="/logout" render={(props)=><Logout {...props}/>} exact/>
    
    </BrowserRouter>
    
    
  );
}
