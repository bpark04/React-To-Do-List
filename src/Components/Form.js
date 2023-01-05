import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <input 
            type = "text" 
            name = "value" 
            style = {{ flex: '10', padding: '5px' }} 
            placeholder = "Please enter your next to-do" 
            value = {value}
            onChange = {handleChange}
          />
          <input 
            type = "submit"
            value = "Enter"
            className = "btn"
            style = {{flex: '1'}}
          />
        </form>
  )
} 