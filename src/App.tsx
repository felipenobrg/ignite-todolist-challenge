import { useState } from "react";
import styles from "./App.module.css";
import Empty from "../public/empty.svg";
import { Trash } from "phosphor-react";
import { Header } from "./Components/Header/Header";
import { Input } from "./Components/Input/Input";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isCheckedList, setIsCheckedList] = useState([]);

  const newTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const createNewTask = () => {
    setTaskList([...taskList, task]);
    setIsCheckedList([...isCheckedList, false]);
    setTask("");
  };

  const removeTask = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };  

  const handleCheck = (index: number) => {
    const newIsCheckedList = [...isCheckedList];
    newIsCheckedList[index] = !newIsCheckedList[index];
    setIsCheckedList(newIsCheckedList);
  };

  return (
    <>
      <Header />

      <Input 
       newTask={newTask} 
       createNewTask={createNewTask}
       />

      <div className={styles.countTasks}>
        <p className={styles.taskMade}>
          Tarefas criadas <span className={styles.spanCounterTask}>{taskList.length}</span>
        </p>
        <p className={styles.taskFinished}>
          Concluídas <span className={styles.spanCounterFinished}>{isCheckedList.filter(isChecked => isChecked).length}</span>
        </p>
      </div>

      <div>
        {taskList.length === 0 ? (
          <div className={styles.noTasks}>
            <img className={styles.emptyImage} src={Empty} alt="Empty Image" />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <h3 className={styles.h3opacity}>
              Crie tarefas e organize seus itens a fazer
            </h3>
          </div>
        ) : (
          taskList.map((task, index) => (
            <div className={`${styles.taskCreate} ${isCheckedList[index] ? styles.taskChecked : ''}`}>
              <input 
              checked={isCheckedList[index]}
              onChange={() => handleCheck(index)}
              className={styles.check} 
              type="checkbox" 
              />
              {task}
              <Trash
                onClick={removeTask}
                size={20}
                className={styles.trashSvg}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;