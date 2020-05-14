import React,{useState,useEffect} from 'react';
export default ()=>{
    let [name,setName] = useState(1);
    let [count,setCount] = useState(1);
    useEffect(()=>{
        console.log('hssdjs')
    },[])
    return (<div>
        <button onClick={()=>setName(++name)}>Clcik</button>
        <button onClick={()=>setCount(++count)}>Clcik2</button>
        my count is {name}{count}
    </div>)
}