import React from "react"
import Layout from "../../hoc/Layout/Layout";
import classes from "./Timer.module.css";
//import timer from "../../images/timer.png"
import Input from "../../components/UI/Input/Input";

class Timer extends React.Component {
    state = {
        defaultTime: null,
        formControls: {
            hours: {
                defaultHours: 0,
                label: 'Hours',
                value: 0,
            },
            minutes: {
                defaultMinutes: 0,
                label: 'Minutes',
                value: 0,
            },
            seconds: {
                defaultSeconds: 0,
                label: 'Seconds',
                value: 0,
            }
        }
    }

    getTime = (control) => {
        const date = new Date();

        switch (control.label.toLowerCase()) {
            case 'hours': {
                control.defaultHours = control.value;
                break;
            }
            case 'minutes': {
                control.defaultMinutes = control.value;
                break;
            }
            case 'seconds': {
                control.defaultSeconds = control.value;
            }
        }

        console.log(control);

        date.setHours(0, 0, 0);

        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    onChangeInput = (value, controlName) => {
        const defaultTime = this.state.defaultTime;
        const formControls = {...this.state.formControls}
        const control = formControls[controlName];

        // Set value in control
        control.value = value;

        const time = this.getTime(control);
        console.log(time);

        // Rewrite control
        formControls[controlName] = control;

        // Set state
        this.setState({
            formControls,
            defaultTime: time
        })
    }

    renderInputs = () => {
        const formControls = {...this.state.formControls}

        return Object.keys(formControls).map((controlName, index) => {
            const control = formControls[controlName];

            return (
                <Input
                    key={`${control.label}-${index}`}
                    label={control.label}
                    value={control.value}
                    onChange={(event) => {
                        this.onChangeInput(event.target.value, controlName);
                    }}
                />
            )
        })
    }

    render() {
        // const styles = {
        //     backgroundImage: `url(${timer})`
        // }
        return (
            <Layout bgColor="black">
                <div className={classes.Timer}>
                    <div className={classes['Timer-body']}>
                        <div>{this.state.defaultTime}</div>
                    </div>
                    {this.renderInputs()}
                </div>
            </Layout>
        )
    }
}

export default Timer