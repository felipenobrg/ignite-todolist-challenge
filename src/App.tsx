import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const newTask = (event: any) => {
    setTask(event.target.value)
  }

  const createNewTask = () => {
    setTaskList([...taskList, task])
    setTask('')
  }

  const removeTask = () => {
    setTaskList([])
  }

  return (
    <>
     <label>Adicione uma nova tarefa:</label>
     <input onChange={newTask} type="text" c/>
     <button onClick={createNewTask}>Criar +</button>
     <button onClick={removeTask}>Remove</button>
     {taskList.map((task) => (
      <p>{task}</p>
     ))}
    </>
  )
}

export default App
