import React from 'react'


type PropsType = {
    onItemChange: (inputLetter: string)=> void,
    value: string
}

class InputComponent extends React.Component<PropsType> {

    onItemChange = (event: any) => {
      this.props.onItemChange(event.currentTarget.value)
    }

    render() {
        return <div>
            <input value={this.props.value} placeholder='Type your request' onChange={this.onItemChange} />
            <button>search</button>
        </div>
    }
}

export default InputComponent