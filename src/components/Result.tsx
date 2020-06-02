import React from 'react'


type PropsType = {
    result: string
    styleForResults: string
}

const Result = (props: PropsType) => {
    return <div className={`${props.styleForResults}`}>
        {props.result}

    </div>
}

export default Result