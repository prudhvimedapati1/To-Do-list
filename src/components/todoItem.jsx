import React,{useState} from "react"

function TodoItem(props){
  const[isDone,setIsDone]=useState(false);
function handleClick(){
  setIsDone(prevValue=> !prevValue
  );
  }
  return(
    <div >
    <div className="listitem" onClick={handleClick}>
    <li style={{textDecoration:isDone?"line-through" : "none"}}  >{props.value}</li>
    </div>
    <button className="delete" onClick={()=>{props.onChecked(props.id);}}>Delete</button>
    </div>
  )
}

export default TodoItem;