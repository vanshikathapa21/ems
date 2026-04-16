import React from 'react'

const tasks = [
  { title: 'Make a youtube video', date: '16 April 2026', priority: 'High', color: 'bg-red-600' },
  { title: 'Make a youtube video', date: '16 April 2026', priority: 'High', color: 'bg-blue-600' },
  { title: 'Make a youtube video', date: '16 April 2026', priority: 'High', color: 'bg-green-600' },
  { title: 'Make a youtube video', date: '16 April 2026', priority: 'High', color: 'bg-yellow-600' },
]

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="mt-10 flex h-[55%] w-full gap-5 overflow-x-scroll py-5 snap-x snap-mandatory touch-pan-x lg:overflow-x-hidden"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`${task.color} h-full min-w-[280px] flex-shrink-0 rounded-xl p-5 snap-start md:min-w-[320px] lg:min-w-0 lg:flex-1`}
        >
          <div className="flex items-center justify-between">
            <h3 className="rounded bg-black/20 px-3 py-1 text-sm">{task.priority}</h3>
            <h4 className="text-sm">{task.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
            libero sapiente quibusdam fuga debitis.
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
