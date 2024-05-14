import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setGender ,setSpecies ,setStatus, setpageNumber}) => {
  let Clear = () => { // this function will clear all filters.
    setGender("");
    setSpecies("");
    setStatus("");
    setpageNumber("");
    window.location.reload();
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-2'>
      Filters
      </div>
      <div onClick={Clear}
      style={{cursor:'pointer'}} 
      className='text-center text-primary text-decoration-underline mb-3'>
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setpageNumber={setpageNumber}/>
        <Species setSpecies={setSpecies} setpageNumber={setpageNumber}/>
        <Status setStatus={setStatus} setpageNumber={setpageNumber}/>
      </div>
    </div>
  )
}

export default Filters
