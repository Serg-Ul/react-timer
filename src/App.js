import React from "react"
import {Route, Switch} from "react-router-dom";
import Timer from "./containers/Timer/Timer";

class App extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" component={Timer}/>
                </Switch>
            </>
        )
    }
}

export default App;
