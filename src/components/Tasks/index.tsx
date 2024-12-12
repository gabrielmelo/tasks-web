import { nanoid } from 'nanoid'

import { useState } from "react";
import { Task, TaskProps } from "../Task";
import { CreateTaskButton } from "../CreateTaskButton";


export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [task, setNewTask] = useState('')

  function handleNewTaskChange() {
    setNewTask(event?.target.value)
  }

  function deleteTask(taskIdToDelete: string) {
    const createNewTasksWithoutDeleteOne = tasks.filter(task => task.id !== taskIdToDelete)

    setTasks(createNewTasksWithoutDeleteOne)
  }

  function handleCreateNewTask() {
    event?.preventDefault()

    setTasks([...tasks, {
      id: nanoid(),
      text: task,
      completed: false
    }])
  }

  return (
    <div className="max-w-[736px] mx-auto">
      
      <form className="-mt-8 w-full" onSubmit={handleCreateNewTask}>
        <div className="flex gap-2">
          <input
            type="input"
            className="w-full bg-gray-500 h-14 px-4 rounded-lg text-gray-100 
            placeholder:text-gray-300 border border-gray-700"
            onChange={handleNewTaskChange}
            value={task}
            name="task"
            placeholder="Adicione uma nova tarefa"
          />

          <CreateTaskButton label="Criar" type="submit" />
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