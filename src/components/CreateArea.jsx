import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

function CreateArea (props) {
    const [memo, setMemo] = useState({
        title: "",
        content: ""
    });

    const [isFormClicked, setFormClicked] = useState(false);

    function handleMemoChange (event) {
        const { value, name } = event.target;

        setMemo(function (prevMemo) {
            return {
                ...prevMemo,
                [name]: value
            };
        });

    }

    function handleFormClick () {
        setFormClicked(true);
    }

    return (
        <div>
            <form onClick={ handleFormClick } className="create-note">
                { isFormClicked && <input onChange={ handleMemoChange } value={ memo.title } name="title" placeholder="Title" /> }
                <textarea onChange={ handleMemoChange } value={ memo.content } name="content" placeholder="Take a note..." rows={ isFormClicked ? "3" : "1" } />
                <Zoom in={ isFormClicked && true }>
                    <Fab onClick={ (event) => {
                        event.preventDefault();
                        props.onAdd(memo);
                        setMemo({
                            title: "",
                            content: ""
                        });
                    } }><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default CreateArea;
