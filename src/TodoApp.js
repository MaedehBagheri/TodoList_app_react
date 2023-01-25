import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp =()=>{
    const[todos,setTodos]=useState([]);



    const addTodoHandler=(input)=>{
       const newTodo =
       {id: Math.floor(Math.random() * 1000),
        text: input,
    isCompleted: false,
}
setTodos([...todos,newTodo])
    }


const completeTodo=(id)=>{
    const index =todos.findIndex((todo)=>todo.id === id)
    
    const selectedTodo ={...todos[index]};
    selectedTodo.isCompleted=!selectedTodo.isCompleted;
    console.log(selectedTodo)
    
    const updatedTodo ={...todos};
    updatedTodo[index]=selectedTodo;
    

    setTodos(updatedTodo)


}

const removeTodo =(id)=>{

    // console.log(id);
    const filteredTodos =todos.filter((t)=> t.id !== id);
    setTodos(filteredTodos);

}

const updateTodo =(id,newValue)=>{
    const index =todos.findIndex((todo)=>todo.id === id)
    
    const selectedTodo ={...todos[index]};
   selectedTodo.text=newValue;
    
    const updatedTodo ={...todos};
    updatedTodo[index]=selectedTodo;
    

    setTodos(updatedTodo)
}

    return(
        <div className="container">
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList todos={todos} onComplete={completeTodo} onDelete={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoApp;