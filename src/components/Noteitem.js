import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-2">
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="far fa-edit mx-1"></i>
                <i className="far fa-trash-alt mx-1"></i> 
                </div>
            </div>
        </div>
    )
}

export default Noteitem