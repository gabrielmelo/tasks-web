export function ContentEmpty() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-56 border-t border-t-gray-400 rounded-lg">
      <img
        src="/assets/clipboard.svg"
        style={{ width: '56px', height: '56px' }}
      />
      <div className="px-10">
        <b className="block font-bold text-base text-gray-300">
          Você ainda não tem tarefas cadastradas
        </b>
        <span className="text-base text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}