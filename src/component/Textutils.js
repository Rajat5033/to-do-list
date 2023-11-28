import React, { useState } from 'react'


function Textutils() {
    const onchange = (e,em) =>{
        console.log(e.target.value)
        setUpper(em.target.value)
    }
     const onclickchangeupper = () =>{
        let letter = upper.toUpperCase()
        setUpper(letter)
     }
     const onclickchangelower = () =>{
        let letter2 = lower.toLowerCase()
        setLower(letter2)
     }
    const [upper, setUpper] = useState()
    const [lower, setLower] = useState()
      return (
    <div>
      <h1>Enter text here</h1>
      <textarea value={upper} onChange={onchange} col="80" row="8"></textarea>
      <button onClick={onclickchangeupper}>Change To Upper Case</button>
      <button onClick={onclickchangelower}>Change To Lower </button>
      
    </div>

  )
}

export default Textutils
