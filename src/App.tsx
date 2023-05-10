import { useState } from 'react'
import styles from './App.module.css'
import logoRocket from '../public/logo-rocket.svg'
import Empty from '../public/empty.svg'
import { PlusCircle } from 'phosphor-react'

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

  const removeTask = (index: number) => {
    const newTaskList = [...taskList]
    newTaskList.splice(index, 1)
    setTaskList(newTaskList)
  }

  return (
    <>
    <header className={styles.header}>
     <img src={logoRocket} alt="Foguete" />
     <h1><span className={styles.to}>to</span><span className={styles.do}>do</span></h1>
    </header>

    <div className={styles.input}>
     <input className={styles.inputAdd} onChange={newTask} type="text" placeholder='Adicione uma nova tarefa'/>
     <button className={styles.buttonCreatePost} onClick={createNewTask}>Criar <PlusCircle size={20} /> </button>
    </div>

    <div className={styles.countTasks}>
      <p className={styles.taskMade}>Tarefas criadas <span className={styles.spanCounterTask}>0</span></p>
      <p className={styles.taskFinished}>Concluídas <span className={styles.spanCounterFinished}>0</span></p>
    </div>

    <div className={styles.line}>
    <hr />
    </div>

    <div>
    {taskList.length < 1 
    ?
    <div className={styles.nonTasks}>
    <img className={styles.emptyImage} src={Empty} alt="Empty Image" />
    <h3>Você ainda não tem tarefas cadastradas</h3> 
    <h3 className={styles.h3opacity}>Crie tarefas e organize seus itens a fazer</h3>
    </div>
    :
    <h1>oii</h1>
    }
    {taskList.map((task) => (
      <p>{task}</p>
     ))}
     </div>
    </>
  )
}

export default App
