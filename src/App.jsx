import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from "./components/CreateArea";
import './App.css'

const App = () => {
  const [notes,setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item,index) => {
        return index !== id;
      });
    })
  }
  
  return (
    <div>
      <Header />
      
      <CreateArea 
        addition = {addNote}
      />

      {notes.map((item,index) => {
        return(
          <Note 
            key={index}
            id={index}
            title={item.title} 
            content={item.content} 
            deletion={deleteNote}
          />);
      })}

      <Footer />
    </div>
  )
}

export default App