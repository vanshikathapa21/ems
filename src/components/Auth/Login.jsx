import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted', { email, password })
    setMessage(`Login button clicked for ${email}`)
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-slate-900'>
      <div className='border-2 border-red-600 p-8 rounded-2xl'>
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center gap-4'>
          <input required
            className='w-80 text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input required
            className='w-80 text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='w-80 text-white outline-none bg-emerald-600 py-3 px-5 rounded-full'
            type="submit"
          >
            Log in
          </button>
          {message && <p className='text-sm text-emerald-300'>{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login