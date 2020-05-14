export default function(data,priority,category){
    

    let val=data.filter((entry)=>{
        if(category==='All' && priority!=='All'){
            return (entry['Priority']==priority)
        }
        else if(category!=='All' && priority==='All'){
            return (entry['Defect Category']===category)
        }
        else if(category==='All' && priority==='All'){
            return data;
        }
        else{
            return (entry['Priority']==priority && entry['Defect Category']===category)
        }

    })
    
    return  val;
}