import React, {Component} from "react"
import { BrowserRouter, Route } from "react-router-dom"
import App from "./App"
import Settings from './Settings'

class Home extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route  path="/" component={App} exact/>
                    <Route  path="/settings" component={Settings} exact/>
                </div>
                
            </BrowserRouter>
        )
    }
    
}

export default Home