import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App () {
    const [memoList, setMemoList] = useState([]);

    function addMemo (memo) {
        setMemoList(function (prev) {
            const currentMemoList = [...prev, memo];
            return currentMemoList;
        });
    }


    function removeMemo (index) {
        setMemoList(function (prevMemoList) {
            return prevMemoList.filter((value, idx) => idx !== index);
        });
    }

    return (
        <div>
            <Heading />
            <CreateArea onAdd={ addMemo } />
            { memoList.map(function (memo, index) {
                return (<Note
                    id={ index }
                    key={ index }
                    title={ memo.title }
                    content={ memo.content }
                    onRemove={ removeMemo }
                />);
            }) }
            <Footer />
        </div>
    );
}


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


export default App;