import { PlusCircle } from 'phosphor-react'
import styles from './Input.module.css'

interface InputsProps {
    newTask: string;
    createNewTask: void;
}

export const Input = ({ newTask, createNewTask }: InputsProps) => {
    return (
        <div className={styles.input}>
        <input
          className={styles.inputAdd}
          onChange={newTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.buttonCreatePost} onClick={createNewTask}>
          Criar <PlusCircle size={20} />
        </button>
      </div>
    )
}