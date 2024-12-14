import { nanoid } from 'nanoid'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task, TaskProps } from "../Task";
import { TaskButton } from "../CreateTaskButton";


export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('')
    setNewTask(event?.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    setTasks([...tasks, {
      id: nanoid(),
      text: newTask,
      completed: false
    }])
  }

  function deleteTask(taskIdToDelete: string) {
    const createNewTasksWithoutDeleteOne = tasks.filter(task => task.id !== taskIdToDelete)

    setTasks(createNewTasksWithoutDeleteOne)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = newTask.length === 0

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

      <div className="mt-40 lg:mt-16 space-y-3">
        {tasks.length >= 0 
          ? tasks.map((task) => {
            return (
              <Task
                text={task.text}
                id={task.id}
                key={task.id}
                completed={task.completed}
                onDeleteTask={deleteTask} />
              )
            })
          : <h1>Não tem!</h1>
        }
      </div>
    </div>
  )
}