import React from 'react';

import InputComponent from "./InputComponent";
import Loader from './loader/LoaderComponent';
import BoxResults from "./BoxResultsComponent";
import {dataApi, dataType} from "./data/data";


type PropsType = {
    callback: (data: Array<dataType>) => void
}


class InputContainer extends React.Component<PropsType> {
    state = {
        itemName: '',

        data: [],
        loading: false
    }

    onItemChange = (value: string) => {
        this.setState({
            itemName: value
        })
    }

    async componentDidUpdate(prevProps: Readonly<{}>, prevState: AppStateType, snapshot?: any) {
        if (prevState.itemName !== this.state.itemName) {
            this.setState({loading: true})
            const data = await dataApi.getData(this.state.itemName)
            this.setState({data, loading: false})
            this.props.callback(data)
        }
    }



    render() {

        return (
            <div className="App">
                <h1>Challenge project of Clearmove</h1>
                <InputComponent value={this.state.itemName} onItemChange={this.onItemChange}/>
                {this.state.loading ?
                    <Loader/> :
                    <BoxResults data={this.state.data}/>
                }
            </div>
        );
    }
}

export default InputContainer;

type AppStateType = {
    itemName: string,
    data: Array<dataType>,
    loading: boolean
}