import React from 'react';
import '../App.css';


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
        loading: false,
        styleForInput: 'blueThemeInput',
        styleForResults: 'blueThemeBox',

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
            <div className='searchContainer'>
                <h1>Challenge project of Clearmove</h1>
                <InputComponent
                    value={this.state.itemName}
                    styleForInput={this.state.styleForInput}
                    onItemChange={this.onItemChange}/>
                {this.state.loading ?
                    <Loader/> :
                    <BoxResults
                        styleForResults={this.state.styleForResults}
                        data={this.state.data}/>
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
    styleForInput: '',
    styleForResults: '',
}