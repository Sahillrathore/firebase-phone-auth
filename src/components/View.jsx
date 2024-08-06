import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import object from '../object/Object.json';

// import './view.css';

export const View = () => {
    const { serviceName } = useParams()
    console.log(serviceName);

    const [state, setState] = useState([])

    const showData = () => {
        object.detailsData.map((item) => (item.serviceName === serviceName ? setState(item) : ''))
    }
    useEffect(() => {
        window.scroll(0, 0)
        showData()
        console.log(state);
    }, [])
    return (

        <>
            <div className="view-container">
                <h1 className='view-heading'>{state?.serviceName}</h1>
                <img src={state?.img} alt="img" className='view-img' width='100%' height='100%' />
                <h1>{state?.details1}</h1>
                <h1>{state?.details2}</h1>
                <h1>{state?.details3}</h1>
                <h1>{state?.details4}</h1>
                <h1>{state?.details5}</h1>
            </div>
        </>
    )
}
