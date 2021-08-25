import React from "react"
import classes from "./Background.module.css"

const Background = props => {
    const cls = [
        classes.Background,
        classes[props.bgColor]
    ]

    return (
        <div className={cls.join(' ')}>
            {props.children}
        </div>
    )
}

export default Background;