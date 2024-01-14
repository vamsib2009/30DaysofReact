//Try out uncontrolled component
//Uncontrolled component means we do not control the input data (eg onchange etc)
import React from "react";

export default function Example() {
    const inputRef = React.useRef('') //need to read this concept
    const submitHandler = e => {
        e.preventDefault();
        alert(inputRef.current.value)
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>
            <input type = "text" ref = {inputRef}/>
            <input type = "submit" value ="submit"/>
            </form>
        </div>
    )
}