import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const TodoWrapper = () => {
  const getLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) || []
  const [todos, setTodos] = useState(getLocalStorage())
  const addTodo = newTodo => setTodos([...todos, newTodo])
  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id))
  const toggleClass = id => setTodos(todos.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo))
  const toggleIsEdit = (id, value) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, title: value} : todo))
  }

useEffect(() => {
  localStorage.setItem('todoList', JSON.stringify(todos))
}, [todos])

  return (
    <div className="wrapper">
      <div className="todo-wrapper">
        <h1 className="title">Get Things donel</h1>
        <TodoForm addTodo={addTodo}/>
        <TransitionGroup>
          {todos.map(todo =>
            <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="todo"
            >
              <Todo todo={todo} removeTodo={removeTodo} toggleIsEdit={toggleIsEdit} toggleClass={toggleClass}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default TodoWrapper
