import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
          <input 
            type = "text" 
            name = "value" 
            className="w-full px-3 py-2 mr-4 text-grey-500 border rounded shadow"
            placeholder = "Please enter your next to-do" 
            value = {value}
            onChange = {handleChange}
          />
          <input 
            className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
            type = "submit"
            value = "Enter"
          />
        </form>
  )
} 
