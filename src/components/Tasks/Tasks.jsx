import React from "react";

const Tasks = ({todo, ...props}) =>{

    const ActionBtn = () => <div className="action-btn">{!todo.done ? <p onClick={props.doneTask}>Undone</p> : <p onClick={props.deleteTask}>Done</p>}</div>
    const className = 'todo' + (todo.done ? '-done' : '');

    return(
        <div className={className}>
            <p>{todo.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}

export default Tasks;

