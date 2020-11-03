import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './components/Bootstrap';

import Dashboard from './components/Dashboard';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Dashboard />
            </div>

        );
    }
}
export default App;