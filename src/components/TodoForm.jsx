/* eslint-disable react/prop-types */
import { useState } from "react"

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({title: ''})

  const createTodo = e => {
    e.preventDefault()
    const newTodo = {
      ...todo,
      id: Date.now(),
      isComplete: false,
      isEdit: false
    }
    addTodo(newTodo)
    setTodo({title: ''})
  }

  return (
    <form onSubmit={createTodo}>
      <input 
        value={todo.title}
        onChange={e => setTodo({...todo, title: e.target.value})}
        type="text"
        className="todo-input"  
      />
      <button className="todo-button"  >Add</button>
    </form>
  )
}

export default TodoForm
