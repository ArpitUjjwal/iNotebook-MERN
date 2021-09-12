import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 1",
          "description": "note 1 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96853aeb922924ab0e6",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 2",
          "description": "note 2 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:56.726Z",
          "__v": 0
        },
        {
          "_id": "613da96d53aeb922924ab0e8",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 3",
          "description": "note 3 desc",
          "tag": "test",
          "date": "2021-09-12T07:17:01.271Z",
          "__v": 0
        },
        {
          "_id": "613da97453aeb922924ab0ea",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 4",
          "description": "note 4 desc",
          "tag": "test",
          "date": "2021-09-12T07:17:08.553Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 5",
          "description": "note 5 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 6",
          "description": "note 6 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 7",
          "description": "note 7 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        },
        {
          "_id": "613da96053aeb922924ab0e4",
          "user": "613da93053aeb922924ab0e0",
          "title": "Note 8",
          "description": "note 8 desc",
          "tag": "test",
          "date": "2021-09-12T07:16:48.078Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;