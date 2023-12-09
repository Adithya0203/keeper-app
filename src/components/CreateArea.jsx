import React, { useState } from 'react'

const CreateArea = (props) => {
    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name,value} = event.target;
        setNote((prevNote) => {
            return {...prevNote,[name]:value};
        });
    }

    function submit(event){
        event.preventDefault();
        props.addition(note);
        setNote({
            title:"",
            content:""
        })
    }

    return (
        <div>
        <form>
            <input onChange = {handleChange} name="title" placeholder="Title" value={note.title} />
            <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
            <button onClick={submit}>Add</button>
        </form>
        </div>
    )
}

export default CreateArea