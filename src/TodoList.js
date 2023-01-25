
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./app.css";
const TodoList =({todos,onComplete,onDelete,updateTodo})=>{

const [edit,setEdit] =useState({id : null ,text:'',isCompleted:false })

const submitTodo=(newValue)=>{
    updateTodo(edit.id,newValue);
    setEdit({id:null , text:''})
}


    const renderTodos=()=>{

    if(todos.length === 0)return <p className="text">add some todos</p>;




    return todos.map((todo)=>{
          return(
          <Todo
             key={todo.id}
             todo={todo}
              onComplete={()=>onComplete(todo.id) }
              onDelete={()=>onDelete(todo.id)}
              onEdit={()=>setEdit(todo)}
              />);
      })};


return <div>{edit.id ? <TodoForm addTodoHandler={submitTodo} edit={edit}/> :renderTodos()}</div>

    }
       

         
        
    


export default TodoList;