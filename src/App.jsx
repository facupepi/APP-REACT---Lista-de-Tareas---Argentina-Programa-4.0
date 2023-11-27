import React, { useEffect, useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'

function App() {

  const [Tasks, setTasks] = useState([]) 
  const [CurrentTasks, setCurrentTasks] = useState([])
  const [searchString,setsearchString] = useState('')

  const addTask = (Task) => {
    setTasks([...Tasks,Task])
  }

  const deleteTask = (id) => {
    setTasks(Tasks.filter(task => (task.id != id)))
  }

  const handleChangeString = (e) => {
    setsearchString(e.target.value)
  }

  useEffect(() => {
      setCurrentTasks(Tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString,Tasks])
  

  return (
    <div className="container">
    <TaskForm addTask={addTask} />
    <div className='search-div'>
      <input className='form-ingres' type='text'onChange={handleChangeString} value={searchString} placeholder='Buscar Tarea...'></input>
    </div>
    <hr/>
    <TaskList Tasks={CurrentTasks} deleteTask={deleteTask} />
  </div>
  )
}

export default App

/*
CurrentTask almacena las tareas actuales que coincidan con el filtro de busqueda. Es el que se muestra constantemenet
Tasks almacena todas las tareas existentes

UseEffect ejecuta su codigo cada vez que el estado searchString o el estado Tasks cambien. 
Es decir, cada vez que se cambie el filtro de busqueda,
o bien que el array de tareas cambie (al modificar el estado, es decir, cuadno se hace un setTasks)

Dentro de useEffect identificamos que tareas del array Tasks tienen como titulo el String de Busqueda
*/