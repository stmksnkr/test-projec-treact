import React, { useState } from 'react'

const Test = (prop) => {
    const [count , SetCount]=useState(0);
    function handler()
    {
        alert("hello")
    }
  return (
    <div>
      <h2>{prop.data} , {count}</h2>
    <h2>{count}</h2>
    <button onClick={()=>SetCount(count+1) } >count </button>
    <button onClick={()=>SetCount(0)}>Refresh </button>
    <button onClick={()=>handler()}>Alert me</button>
    </div>
  )
}

export default Test
