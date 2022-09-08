import React from 'react';

const ToDoItem = (props) => {

    // const [isDone, setIsDone] = useState(false);

    // const handleClick = () => {
    //     // setIsDone(prevValue => !prevValue);
    // }

    return (
        <div onClick={() => {
            props.onChecked(props.id);
        }}>
            <li> {props.text} </li>
        </div>
    );
}

export default ToDoItem;


// onClick={handleClick} style={{ textDecoration: isDone ? "line-through" : "none" }}