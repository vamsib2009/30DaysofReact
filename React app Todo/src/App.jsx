import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./newTodoForm"

export default function App()
{
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  }) /*add Todos and retrieve any old Todos from local storage */

  

  useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos))}, 
  [todos]) /*use effect hook for persistent storage*/
  
  function addTodo(newItem){
    setTodos(currentTodos => {
      return [
        ...currentTodos, /*create an array of Todos*/
        {
          id: crypto.randomUUID(), title: newItem, completed: false},
        
      ]
    })

  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    }
      
      )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) /* filter todos except for the one to remove */
    })
  }
  
  return (
<> 
  <NewTodoForm onSubmit = {addTodo} />
  <h1 className="header">Todo List</h1>
  <u1 className = "list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return (
        <l1 key={todo.id}> 
        <label>
          <input type = "checkbox" checked = {todo.completed} 
          onChange={e => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.title}
        </label>
        <button 
        onClick = {() => deleteTodo(todo.id)}
        className="btn btn-danger"> Delete</button>
      </l1>
      )
    })}
  </u1>
  </>
  )
}