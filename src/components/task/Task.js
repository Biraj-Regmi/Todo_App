import React from 'react'

const Task = ({index,title,description,deleteTask}) => {
  
  return (
    <div><div className='Task'> 
    <div >
      <div className='span_head'>
        <span className='span1'>{index}</span>
        <h2 className='head2'>{title}</h2>
        </div>
        <p id='para2' >{description}</p>
        
    </div>
    <button onClick={()=>{deleteTask(index)}}>-</button>
    </div></div>
  )
}

export default Task