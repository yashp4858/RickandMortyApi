import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const CardDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]); // this state use to hold data of charac info.
    let { name, image, origin, location, gender, species, status, type }
        = fetchedData; // destructured the fetcheddata. 
    let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(() => {

        // Api Call function
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchedData(data);
        })()

    }, [api])
    return (
        <div className='container d-flex justify-content-center'>
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'>
                    {name}
                </h1>
                <img src={image} alt="" className='img-fluid' />
                {(() => { //using if-elseif-else for showing status
                    if (status === 'Dead') {
                        return (
                            <div className='badge bg-danger'>{status}</div>
                        )
                    } else if (status === 'Alive') {
                        return (
                            <div className='badge bg-success'>{status}</div>
                        )
                    } else {
                        return (
                            <div className='badge bg-secondary'>{status}</div>
                        )
                    }
                })()}
                <div className='characterinfo d-flex gap-5 justify-content-center'>
                    <div>
                        <div className=''>
                            <span className='fw-bold'>Gender: </span>
                            {gender}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>Location: </span>
                            {location?.name}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>Type: </span>
                            {type === ""? "Unknown":type}
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <span className='fw-bold'>Origin: </span>
                            {origin?.name}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>Species: </span>
                            {species}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
