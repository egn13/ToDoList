/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai'

const Todo = ({todo, removeTodo, toggleIsEdit, toggleClass}) => {
  const [value, setValue] = useState(todo.title)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='todo-item'>
      {isEdit
        ?
          <input
            value={value}
            onChange={e => setValue(e.target.value)} 
            type="text" 
            className='todo-input'
          />
        : 
          <p className={todo.isComplete ? 'todo toggle': 'todo'} onClick={() => toggleClass(todo.id)}>{todo.title}</p>
      }
      <div>
        {isEdit
          ?
          <AiOutlineCheck className='button button_edit' onClick={() => {
            toggleIsEdit(todo.id, value),
            setIsEdit(false)
          }}/>
          :
          <AiFillEdit className='button button_edit' onClick={() => setIsEdit(true)}/>
        }
        <AiFillDelete className='button button_delete' onClick={() => removeTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default Todo
