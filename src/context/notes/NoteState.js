import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "613da9f6053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 1",
          "description": "note 1 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da9h6853aeb922924ab0e6",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 2",
          "description": "note 2 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:56.726Z",
          "__v": 0
        },
        {
          "_id": "613da96gd53aeb922924ab0e8",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 3",
          "description": "note 3 desc",
          "tag": "test",
          "date": "2021-09-12T07:17:01.271Z",
          "__v": 0
        },
        {
          "_id": "613da97453faeb922924ab0ea",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 4",
          "description": "note 4 desc",
          "tag": "test",
          "date": "2021-09-12T07:17:08.553Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93df053aeb922924ab0e0",
          "title": "Note 5",
          "description": "note 5 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da9605a3aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 6",
          "description": "note 6 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb92292s4ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 7",
          "description": "note 7 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96053aebs922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 8",
          "description": "note 8 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      //Add a note
      const addNote = (title, description, tag)=>{
        //TODO: API call
        const note = {
          "_id": "613da96053aebs922924asb0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": title,
          "description": description,
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Delete a note
      const deleteNote = (id)=>{
        //TODO: API call
        console.log("Deleting the note id-" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      // Edit a note
      const editNote = (id, title, description, tag)=>{
        
      }

    return(
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;