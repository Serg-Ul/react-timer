import React from "react"
import Layout from "../../hoc/Layout/Layout";
import classes from "./Timer.module.css";
//import timer from "../../images/timer.png"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

class Timer extends React.Component {
    state = {
        defaultTime: '0:0:0',
        defaultValues: {
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        formControls: {
            hours: {
                label: 'Hours',
                value: 0,
            },
            minutes: {
                label: 'Minutes',
                value: 0,
            },
            seconds: {
                label: 'Seconds',
                value: 0,
            }
        }
    }

    getTime = (control) => {
        const defaultValues = {...this.state.defaultValues}

        switch (control.label.toLowerCase()) {
            case 'hours': {
                defaultValues.hours = +control.value;
                break;
            }
            case 'minutes': {
                defaultValues.minutes = +control.value;
                break;
            }
            case 'seconds': {
                defaultValues.seconds = +control.value;
                break;
            }
            default : {
                return;
            }
        }

        this.setState({
            defaultValues
        })

        return `${defaultValues.hours}:${defaultValues.minutes}:${defaultValues.seconds}`;
    }

    onChangeInput = (value, controlName) => {
        //const defaultTime = this.state.defaultTime;
        const formControls = {...this.state.formControls}
        const control = formControls[controlName];

        // Set value in control
        control.value = value;

        const defaultTime = this.getTime(control);

        // Rewrite control
        formControls[controlName] = control;

        // Set state
        this.setState({
            formControls,
            defaultTime
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

    onChangeDefaultTime = () => {
        const defaultValues = {...this.state.defaultValues};

        const interval = setInterval(() => {
            defaultValues.seconds = defaultValues.seconds ? defaultValues.seconds - 1 : 1 - 1;

            if (defaultValues.seconds === 0 && defaultValues.minutes) {
                defaultValues.seconds = 59;
                defaultValues.minutes = defaultValues.minutes - 1;

                if (defaultValues.minutes === 0 && defaultValues.hours) {
                    defaultValues.minutes = 59;
                    defaultValues.hours = defaultValues.hours - 1;
                }
            }

            this.setState({
                defaultTime: `${defaultValues.hours}:${defaultValues.minutes}:${defaultValues.seconds}`,
                defaultValues
            })

            if (this.state.defaultTime === '0:0:0') {
                clearInterval(interval);
            }
        }, 300)
        // const timeLeft = (func, ms) => new Promise(resolve => {
        //     const intervalLeft = setInterval(func, ms);
        //     resolve(intervalLeft);
        // });

        // const interval = await timeLeft(() => {
        //     defaultValues.seconds = +defaultValues.seconds - 1;
        //
        //     if (defaultValues.seconds === 0 && defaultValues.minutes) {
        //         defaultValues.seconds = 59;
        //         defaultValues.minutes = defaultValues.minutes - 1;
        //
        //         if (defaultValues.minutes === 0 && defaultValues.hours) {
        //             defaultValues.minutes = 59;
        //             defaultValues.hours = defaultValues.hours - 1;
        //         }
        //     }
        //
        //     this.setState({
        //         defaultTime: `${defaultValues.hours}:${defaultValues.minutes}:${defaultValues.seconds}`,
        //         defaultValues
        //     })
        // }, 1000)
        //
        // setTimeout(() => {
        //     clearInterval(interval)
        // }, (defaultValues.seconds * 1000) + (defaultValues.minutes * 60000) + (defaultValues.hours * 600000))
        // defaultValues.seconds * 1000)

        // <= or =>
        // .then(interval => {
        //     setTimeout(() => {
        //         clearInterval(interval)
        //     }, defaultValues.seconds * 1000)
        // })

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
                    <Button type="success" onClick={this.onChangeDefaultTime}>
                        Starting timer
                    </Button>
                </div>
            </Layout>
        )
    }
}

export default Timer