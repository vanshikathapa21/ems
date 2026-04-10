import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full'>
        <div className='h-40 flex-1 bg-red-400 text-white py-5 px-9 rounded-xl'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='h-40 flex-1 bg-blue-400 text-white py-5 px-9 rounded-xl'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='h-40 flex-1 bg-green-400 text-white py-5 px-9 rounded-xl'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='h-40 flex-1 bg-yellow-400 text-white py-5 px-9 rounded-xl'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers