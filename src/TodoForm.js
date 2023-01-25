import { useEffect, useRef, useState } from "react";
import "./app.css";
const TodoForm =(props)=>{
    const[input,setInput] =useState("");

const inputRef =useRef(null);
useEffect(()=>{
    inputRef.current.focus()
},[])

    const changeHandler=(e)=>{
        setInput(e.target.value)
        console.log(e.target.value)
    }



    const submitHandler=(e)=>{
        e.preventDefault();


        if(!input){
            alert ("enter todo !");
            return;
        }


        props.addTodoHandler(input);

        setInput("");
    }


    return(
        <div >
            <form onSubmit={submitHandler}className="formcontrol">
                {props.edit ? (
                    <>
                    <input  type="text" ref={inputRef} value={input} onChange={changeHandler} placeholder="new todo ..."/>
<button type="submit" className="button">Update</button>
                    </>
                ):(
<>
<input  type="text" value={input} ref={inputRef}  onChange={changeHandler}  placeholder="add todo ..."/>
<button type="submit" className="button">Add Todo</button>
</>

                    )}
            </form>
        </div>
    )
}

export default TodoForm;