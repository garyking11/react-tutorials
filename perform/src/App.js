import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            route: 'page1'
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <Page1 onRouteChange={this.onRouteChange}/>
                <Page2 onRouteChange={this.onRouteChange}/> />
                <Page3 onRouteChange={this.onRouteChange}/> />
            </div>
        );
    }
}

export default App;
