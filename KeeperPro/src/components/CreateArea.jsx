import React, {useState}from 'react'

function CreateArea(props) {
    const[note,setNote]=useState({ 
         title:"",
        content:""
})
    function handleChange(event){
        const {name,value}=event.target
        setNote(prev =>{
          return{  ...prev,
            [name]:value
          }
        })
    }
    function submitNote(event)
    {
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();

    }
  return (
    <div>
    <form>
        <input type="text" name="title" onChange={handleChange}
        value={note.title}
         placeholder='Title'/>
        <textarea name="content" onChange={handleChange} value={note.content} placeholder='Take a note'
        rows={3}></textarea>
        <button type="submit" onClick={submitNote}>ADD</button>
    </form>
    </div>
  )
}

export default CreateArea