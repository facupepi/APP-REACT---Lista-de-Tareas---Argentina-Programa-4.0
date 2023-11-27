import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({addTask}) => {

  const [Modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!Modal)
  }

const handleAddTask = (e) => {
  e.preventDefault() /*Prevenir el comportamiento del formulario para que no recargue la pagina */
  const title = e.target.title.value
  const description = e.target.description.value
  const Task = {title,description,createdAt: new Date().toDateString(), id: uuidv4()}
  addTask(Task)
  handleModal()
}

  return (
    <div className='div-form'>
      <h1 className='list-h1'>LISTA DE TAREAS</h1>
      <button className='btn-form' onClick={handleModal}>Nueva Tarea <FaRegSquarePlus /> </button>
      {
        Modal
        &&
        <div className='modal-background'>
          <div className='modal'>
            <h2 className='titulo-h2'>Agregar Nueva Tarea</h2>
            <form onSubmit={handleAddTask}>
              <div className='input-container'>
                <label className='form-label' htmlFor='title'>Titulo</label>
                <input className='form-ingres' type='text' id='title' name='title' placeholder='Titulo...' />
              </div>
              <div className='input-container'>
                <label className='form-label' htmlFor='description'>Descripcion</label>
                <textarea className='form-ingres' id='description' name='description' placeholder='Descripcion...' />
              </div>
              <div className='btn-container'>
                <button className='btn-form' type='submit'>Agregar<MdAssignmentAdd /></button>
                <button className='btn-form' onClick={handleModal}>Cancelar<IoIosRemoveCircle /></button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default TaskForm