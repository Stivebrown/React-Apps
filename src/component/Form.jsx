import React from 'react'
import { useState } from 'react'

const Form = ({createTodo}) => {
  const [value, setValue] = useState("");

  const handeleSubmit = e => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  }

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handeleSubmit}>
      <input type="text" className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-8 placeholder:text-white text-white  rounded" placeholder="What task do you have today?" onChange= {(e) => setValue(e.target.value)} value = {value}/>
      <button className='bg-gray-900 text-white p-2 rounded cursor-pointer border-none ml-2'>Add Task</button>
    </form>
  )
}

export default Form