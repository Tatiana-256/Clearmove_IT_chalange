import React from 'react'
import './Theme/Theme.css'


type PropsType = {
    onItemChange: (inputLetter: string)=> void,
    value: string,
    styleForInput: string

}

class InputComponent extends React.Component<PropsType> {

    onItemChange = (event: any) => {
      this.props.onItemChange(event.currentTarget.value)
    }

    render() {
        return <div>
            <input
                value={this.props.value}
                placeholder='Type your request'
                className={`${this.props.styleForInput}`}
                onChange={this.onItemChange} />
        </div>
    }
}

export default InputComponent