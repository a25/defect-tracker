import React,{useState,useEffect} from 'react';
export default ()=>{
    let [name,setName] = useState(1);
    let [count,setCount] = useState(1);
    useEffect(()=>{
        setName('name')
       
    })
    return (<div>
        <button onClick={()=>setName('asj')}>Clcik</button>
        <button onClick={()=>setCount(2)}>Clcik2</button>
        my count is {name}{count}
    </div>)
}