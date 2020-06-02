import React from 'react'
import Result from "./Result";
import {dataType} from "./data/data";


type PropsType = {
    data: Array<dataType>
}


const BoxResults = (props: PropsType) => {
    return <div>
        {props.data.map((r: dataType) =>
            <Result key={r.id} result={r.name}/>
        )}
    </div>
}

export default BoxResults