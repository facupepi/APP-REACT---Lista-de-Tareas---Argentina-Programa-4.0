import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css';

const TaskList = ({Tasks,deleteTask}) => {
  return (
    <div className='list-div'>
      {
        Tasks.length == 0
        ?<h2 className='list-h2'>NO HAY TAREAS</h2>
        :Tasks.map(task =>(
          <TaskItem task={task} deleteTask={deleteTask}/>
        ))
        }
    </div>
  )
}

export default TaskList