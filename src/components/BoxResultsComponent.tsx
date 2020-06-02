import React from 'react'
import Result from "./Result";
import {dataType} from "./data/data";


type PropsType = {
    data: Array<dataType>
    styleForResults: string
}


const BoxResults = (props: PropsType) => {
    return <div className='box'>
        {props.data.map((r: dataType) =>
            <Result key={r.id} result={r.name} styleForResults={props.styleForResults}/>
        )}
    </div>
}

export default BoxResults