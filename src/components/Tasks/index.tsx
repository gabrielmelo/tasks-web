import { Task } from "../Task";

export function Tasks() {
  return (
    <div className="max-w-[736px] mx-auto">
      
      <form className="-mt-8 w-full">
        <div className="flex gap-2">
          <input
            type="input"
            className="w-full bg-gray-500 h-14 px-4 rounded-lg text-gray-100 
            placeholder:text-gray-300 border border-gray-700"
            placeholder="Adicione uma nova tarefa"
          />
        </div>
      </form>

      <div className="mt-40 lg:mt-16 space-y-3">
        <Task id="task-1" text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        <Task id="task-2" text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        <Task id="task-3" text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
      </div>
    </div>
  )
}