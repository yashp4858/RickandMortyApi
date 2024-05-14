import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  let [id, setID] = useState(1); //this state use to hold id value.
  let [info, setInfo] = useState([]); // this state use to hold info of episodes.
  let [results, setResults] = useState([]); //this state use to pass to card section
  let {air_date, name} = info; // destructuring the data iside info.
  console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=> res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x)=> {
          return fetch(x).then((res) => res.json());
        })
      )
      setResults(a)
    })();
  },[api]);
  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-4'>
        Episode : {" "}
          <span className='text-primary'>
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className='text-center'>
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-4'>
          <h4 className='text-center mb-4'>
            Pick Episodes
          </h4>
          <InputGroup setID={setID} name="Episodes" total={51}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page="/episodes/" results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
