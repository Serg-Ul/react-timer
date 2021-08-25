import React from "react"
import classes from "./Layout.module.css"

const Layout = props => {
    const cls = [
        classes.Layout,
        classes[props.bgColor]
    ]

    return (
        <div className={cls.join(' ')}>
            {props.children}
        </div>
    )
}

export default Layout