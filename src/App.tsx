import React from 'react';
import './App.css';
import InputContainer from "./components/InputContainer";
import {dataType} from "./components/data/data";

class App extends React.Component {

    callback(data: Array<dataType>) {
        console.log(data)
    }

    render() {

        return (
            <div className="App">
               <InputContainer callback={this.callback} />
            </div>
        );
    }
}

export default App;

