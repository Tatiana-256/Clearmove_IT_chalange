import React from 'react';
import './App.css';
import InputComponent from "./components/InputComponent";
import BoxResults from "./components/BoxResultsComponent";
import {dataApi, dataType} from "./components/data/data";


class App extends React.Component {
    state = {
        itemName: '',
        data: []
    }

    onItemChange = (value: string) => {
        this.setState({
            itemName: value
        })
    }

   async componentDidUpdate(prevProps: Readonly<{}>, prevState: AppStateType, snapshot?: any) {
        if(prevState.itemName !== this.state.itemName) {
           const data =  await dataApi.getData(this.state.itemName)
            this.setState({data})
        }
    }

    render() {

        return (
            <div className="App">
                <h1>Challenge project of Clearmove</h1>
                <InputComponent value={this.state.itemName} onItemChange={this.onItemChange}/>
                <BoxResults  data={this.state.data}/>
            </div>
        );
    }
}

export default App;

type AppStateType = {
    itemName: string,
    data: Array<dataType>
}