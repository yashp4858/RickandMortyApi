import React from 'react'

const InputGroup = ({total,name,setID}) => {
    return (
        <div class="input-group mb-3">
            <select onChange={(e)=> setID(e.target.value)} 
            style={{width:'100%'}} class="custom-select" 
            id="inputGroupSelect01">
                {/* <option selected>Choose...</option> */}
                {[...Array(total).keys()].map(x=> {
                  return <option value={x+1}>{name} - {x+1}</option>
                })}
            </select>
        </div>
    )
}

export default InputGroup
