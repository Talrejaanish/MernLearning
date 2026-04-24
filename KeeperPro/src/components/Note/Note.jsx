import React, { useState } from 'react'

function Note(props) {
  function handleClick(){
    props.onDelete(props.id)
  }
  return (
    <div >
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Note