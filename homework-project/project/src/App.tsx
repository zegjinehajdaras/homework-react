import React, { ChangeEvent, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 0,
      title: "Clean room",
    },
    {
      id: 1,
      title: "Go to the gym",
    },
    {
      id: 2,
      title: "learn javascript",
    },
  ]);

const [inputValue,setInputValue] = useState<string>("")//we use state to define the first state of element here is state os input at start that is a void string
const [check,setCheck] = useState<boolean>(false)

function onTodoAdd(event:any){
  setInputValue(event.target.value) 
}


function onSave(event: any) {
  if (event.key === 'Enter') {
    const newTodo = {
      id: new Date().valueOf(),
      title: inputValue,
    };
    setTodosList((prevTodos) => {//here we change state of array of list which would take 
      return [...prevTodos, newTodo];
    });
    setInputValue('');
  }
}
function  onDelete(todo:Todo){
const filterTodo = todosList.filter((item)=>item.id !==todo.id)
console.log(filterTodo)
setTodosList(filterTodo)
}

 
function onHide(){
  setCheck(prevState=>{
    if(prevState=== true){
      return false
    }else{
      return true
    }
  })
}


  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i className="fa fa-toggle-on" onClick={onHide} id="kopce" aria-hidden="true"></i>
      </h1>
      {check?<div/>:<input type="text" placeholder="Add New Todo" onChange={onTodoAdd} onKeyPress={onSave} value={inputValue} />}
      <ul>

{
  todosList.map((todo,index)=>{ //here we use map to show the previous element
    return(
      <li key={index} className="el">
        <span  onClick={()=>onDelete(todo)} className="trash">
        <i className="fa fa-trash"></i>
        </span>
        {todo.title}
      </li>
    )
  })
}
 

       
      </ul>
    </div>
  );
};

export default App;
