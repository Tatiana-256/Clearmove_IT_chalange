import React from 'react'


type PropsType ={
    result: string
}

const Result =(props: PropsType)=>{
    return <div>
        {props.result}
    </div>
}

export default Result