import React from 'react'
import './TaskItem.css';


const TaskItem = ({task,deleteTask}) => {
  return (
    <div className='item-div'>
      <h3 className='item-h3'>{task.title}</h3>
      <hr/>
      <p className='item-p'>{task.description}</p>
      <p className='item-p'>{task.createdAt}</p>
      <button className='item-button' onClick={() => deleteTask(task.id)}>Completar</button> 
    </div>
  )
  /* Usamos funcion anonima para no invocar a la funcion simplemente por leer la linea */
}

export default TaskItem