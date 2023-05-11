import { PlusCircle } from 'phosphor-react'
import styles from './Input.module.css'
import { ChangeEventHandler, FC, MouseEventHandler } from 'react';

interface InputsProps {
    newTask: ChangeEventHandler<HTMLInputElement>;
    createNewTask: MouseEventHandler<HTMLButtonElement>;
}

export const Input: FC<InputsProps> = ({ newTask, createNewTask }) => {
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