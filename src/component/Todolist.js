// import React, { useState } from "react";
// import "./Todolist.css";

// export function Todolist() {
//   const [inputValue, setInputValue] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const onChangeHandler = (e) => {
//     console.log("event object", e.target.value);
//     setInputValue(e.target.value);
//   };

//   const onSubmitHandler = () => {
//     if(inputValue === ""){
//       alert("Please add text here");
//     }
//     else{
//       setInputValue("");
//       setTodoList([...todoList, inputValue]);
//     }
   
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={onChangeHandler} />
//       <button onClick={onSubmitHandler}>Add</button>
//       <ul>
//         {todoList.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Todolist


import React, { useState ,useContext} from 'react';
import {contextStore} from "./store"

function Todolist(props) {
  const contextvalue = useContext(contextStore)
  const [displayValue, setdisplayvalue] = useState("");
  const [todoList, setTodolist] = useState([]);
  const onchangeHandler = (e) => {
    console.log("event object", e.target.value);
    setdisplayvalue(e.target.value)
  }
  const onSubmitHandler = () => {
    contextvalue.addData({
      email: displayValue
    })
    if (displayValue === "") {
      alert("please enter a value")
    } else {
      setdisplayvalue("");
      setTodolist([...todoList, displayValue]);
    }
  };
  return (
    <div className='demo'>
      <h1>To Do List</h1>
      <input onChange={onchangeHandler} value={displayValue} className='enter' type='text' placeholder='Enter your work here'></input>
      <button onClick={onSubmitHandler} className='your'>Add</button>
      {/* <ul>
        {todoList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  )
}
export default Todolist



