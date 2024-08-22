import React from "react";

interface ToDoProps {
    id : number;
    text: string;
    completed : boolean;
    toogleToDo :(id : number) => void;
    deleteToDo :(id : number) => void;
}

const ToDo : React.FC<ToDoProps> = ({id, text, completed, toogleToDo, deleteToDo }) => {
    return(
<div className="">

    <div className=""  onClick={() => toogleToDo(id)}>
        {text}
    </div>
    
    <button className="" onClick={() => deleteToDo(id)}>

    </button>

</div>
    );
};

export default ToDo;
