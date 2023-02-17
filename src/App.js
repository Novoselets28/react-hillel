import React from "react";
import Tasks from "./components/Tasks/Tasks";
import Input from "./components/Input/Input";
import './App.css'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      todoList: [
        {
            title: "Smth very important",
            id: Date.now(),
            done: false,
        },
        {
            title: "Another very important thing",
            id: Date.now(),
            done: false,
        },
        {
            title: "Ordinary thing",
            id: Date.now(),
            done: true,
        }
      ]
    }
  }

  addTask = todo =>{
    this.setState(state => {
      let {todoList} = state;
      todoList.push({
          title: todo,
          id: Date.now(),
          done: false,
      })
      return todoList;
    })
  }

  doneTask = id => {
    const index = this.state.todoList.map(todo => todo.id).indexOf(id);
    this.setState(state =>{
      let {todoList} = state;
      todoList[index].done = true;
      return todoList;
    })
  }

  deleteTask = id => {
    const index = this.state.todoList.map(todo => todo.id).indexOf(id);
    this.setState(state =>{
      let {todoList} = state;
      delete todoList[index];
      return todoList;
    })
  }
  render(){
    const {todoList} = this.state;
    return(
      <div className="App">
        <h1 className="top">Active Tasks {todoList.length}</h1>
        {todoList.map(todo => (
          <Tasks todo={todo} key={todo.id} doneTask={() => this.doneTask(todo.id)} deleteTask={() => this.deleteTask(todo.id)}></Tasks>
        ))}
          <Input addTask={this.addTask}></Input>
      </div>
    )
  }
}

export default App;