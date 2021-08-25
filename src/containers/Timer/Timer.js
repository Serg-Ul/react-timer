import React from "react"
import Layout from "../../hoc/Layout/Layout";
import classes from "./Timer.module.css";
import {timer} from "../../images/timer.png"

class Timer extends React.Component {
    render() {
        return (
            <Layout bgColor="black">
                <div className={classes.Timer}>
                    <div/>
                    <img src={timer} alt="" width="100" height="100"/>
                </div>
            </Layout>
        )
    }
}

export default Timer