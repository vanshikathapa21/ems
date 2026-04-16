import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />


      <div>
        <form>
          <h3>Task Tittle</h3>
          <input type="text" placeholder='Make a UI design'  />
          <h3>Description</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <h3>Date</h3>
          <input type="date" />
          <h3>Assign To</h3>
          <input type="text" placeholder='employee name' />
          <h3>Category</h3>
          <input type="text" value="Create Task" placeholder='design,dev,etc.' />
          <button>Create Task</button>
        </form>

      </div>
    </div>
  )
}

export default AdminDashboard
