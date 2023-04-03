import React, { useState } from 'react'

function Final() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={()=>{setValue(value+2)}}>Add</button>
      <input type="text" />
      <button onClick={()=>{setValue(value-2)}}>Substract</button>
    </div>
  )
}

export default Final