import React, { useState } from "react";
import TodoItem from "./todoItem"

function App() {
  const [text,setText]=useState("");
  const [items,setItem]=useState([]);
  function handeChange(event){
    setText(event.target.value);
  }
  function handleClick(){
    setItem((prev) =>[...prev, text]);
    setText("");
  }
  
  function deleteItem(id){
    setItem(prevItems=>{
      return prevItems.filter((item,index)=>{
        return index!== id;
       });
      })
    }
  
    

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handeChange} type="text" value={text} />
        <button className="add" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemValue, index)=>
            <TodoItem key={index} id={index} value={itemValue}
            onChecked={deleteItem}
             />
            )
            }
        </ul>
        
      </div>
    </div>
  );
}

export default App;
