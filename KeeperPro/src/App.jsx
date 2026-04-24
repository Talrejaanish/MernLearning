import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Note from './components/Note/Note'
import Header from './components/Header/Header'
import notes from './components/Note/notes'
import CreateArea from './components/CreateArea'


function App() {
  const[notes,setNotes]=useState([])
  function addNote(newnote)
{
  setNotes(prev=>{
    return [...prev,newnote]
  })
}
function createNote(notes)
{
  return <Note title={notes.title} content ={notes.content}/>
}
function deleteNode(id)
{
  setNotes(prev=>
  {
    return prev.filter((noteItem,index)=>{
      return index!=id
    })
  }
  )
}
  return (
    <>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem,index)=>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNode}/>
    })}
    <Footer/>
    </>
  )
}

export default App
