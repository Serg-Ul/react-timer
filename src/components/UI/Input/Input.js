import React from "react"
import classes from "./Input.module.css";

const Input = props => {
    const htmlFor = `${props.label}-${Math.random()}`
    const inputState = {
        type: props.type ?? 'number',
    }

    return (
        <>
            <div className={classes.Input}>
                <label htmlFor={htmlFor}>{props.label}</label>
                <input id={htmlFor} type={inputState.type} value={props.value} onChange={props.onChange} disabled={props.disabled}/>
            </div>
        </>
    )
}

export default Input;