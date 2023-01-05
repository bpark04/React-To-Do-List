import React from 'react'

export default function List({ todoData, setTodoData }) {

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };


  const handleChangeCompleted = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map(data => (
          <div key={data.id}>
            <div className="flex item-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
              <div>
                <input type="checkbox" defaultChecked={false} onChange={() => handleChangeCompleted(data.id)}/>
                <span className='px-2'>{data.title}</span>
              </div>
              <di>
                <button onClick={() => handleClick(data.id)}>x</button>
              </di> 
            </div>
          </div>
        ))}
    </div>
  )
}
