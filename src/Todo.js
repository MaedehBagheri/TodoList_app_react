import "./app.css"


const Todo =({todo,onDelete,onComplete,onEdit})=>{
    return(
        <div className="formcontrol">
        <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
        <div>
            <button onClick={onEdit}className="button-2">edit</button>
            <button onClick={onDelete}className="button-3">delete</button>
        </div>
    </div>
    )
}

export default Todo;