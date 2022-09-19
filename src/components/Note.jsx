import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
console.log(DeleteIcon);

function Note (props) {
    return (
        <div className="note">
            <h1>{ props.title }</h1>
            <p>{ props.content }</p>
            <button onClick={ () => props.onRemove(props.id) }>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;