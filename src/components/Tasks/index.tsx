import { nanoid } from 'nanoid'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "../Task";
import { TaskButton } from "../CreateTaskButton";
import { ContentEmpty } from '../ContentEmpty';

export interface TaskProps {
  id: string
  text: string
  isCompleted: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {
      id: nanoid(),
      text: newTask,
      isCompleted: false
    }])
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
   setNewTask(event.target.value)
  }

  function onDeleteTask(taskIdToDelete: string) {
    const createNewTasksWithoutDeleteOne = tasks.filter((task) => task.id !== taskIdToDelete)
    
    setTasks(createNewTasksWithoutDeleteOne)
  }

  function onToggleTaskCompleted(taskIdToggleCompleted: string) {

    const updateTasksWithToggleComppleted = tasks.map((task) => {
      if (task.id === taskIdToggleCompleted) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(updateTasksWithToggleComppleted)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = !newTask
  const amountOfTasks = tasks.length
  const amountOfCompletedTasks = tasks.filter( task => task.isCompleted ).length

  return (
    <div className="max-w-[736px] mx-auto">
      
      <form className="-mt-8 w-full" onSubmit={handleCreateNewTask}>
        <div className="flex gap-2">
          <input
            type="input"
            className="w-full bg-gray-500 h-14 px-4 rounded-lg text-gray-100 
            placeholder:text-gray-300 border border-gray-700"
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            value={newTask}
            name="task"
            required
            placeholder="Adicione uma nova tarefa"
          />

          <TaskButton
            label="Criar"
            type="submit"
            disabled={isNewTaskEmpty}
          />
        </div>
      </form>

      <div className="mt-40 lg:mt-16">
        <div className="flex justify-between items-center">
          
          <div className="flex gap-1 items-center">
            <b className="text-sm text-blue-500 px-2 py-1">
              Tarefas criadas
            </b>
            <span className="font-bold bg-gray-400 text-gray-200 px-2 py-1 rounded-full text-xs">
              {tasks.length}
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <b className="text-sm text-purple-500">Concluídas</b>
            <span className="font-bold bg-gray-400 text-gray-200 px-2 py-1 rounded-full text-xs">
              {
                tasks.length === 0
                  ? 0
                  : `${amountOfCompletedTasks} de ${amountOfTasks}`
              }
            </span>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          {tasks.length === 0 
            ? <ContentEmpty />
            : tasks.map((task) => {
              return (
                <Task
                  text={task.text}
                  id={task.id}
                  key={task.id}
                  isCompleted={task.isCompleted}
                  onToggleTaskCompleted={onToggleTaskCompleted}
                  onDeleteTask={onDeleteTask}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}