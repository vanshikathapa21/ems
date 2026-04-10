import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>
        Hello <br /> <span className='text-3xl font-semibold'>Vanshika 👋</span>
      </h1>
      <button className='bg-red-600 hover:bg-blue-700 text-white text-lg font-medium py-2 px-5 rounded-sm'>
        Log Out
      </button>
    </div>
  )
}

export default Header
