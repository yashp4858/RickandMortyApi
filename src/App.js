import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>

        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDetails/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}





function Home() {
  let [pageNumber, setpageNumber] = useState(1); //this state use to hold page number.
  let [fetchedData, updateFetchedData] = useState([]); //this state use to hold character info.
  let [search, setSearch] = useState(""); //this state use for searching characters.
  let [status, setStatus] = useState(""); // this state use for filtering status.
  let [species, setSpecies] = useState("") //this state use for filter species.
  let [gender, setGender] = useState("") //this state use to filter gender.
  let {info, results} = fetchedData; //destructuring
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}
  &name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(()=>{

    // Api Call function
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()

  },[api])
  
  return (
    <div className="App">
      {/* <Navbar/> */}
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">API</span>
      </h1>
      <Search setpageNumber={setpageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
            <Filters
            setGender={setGender} 
            setSpecies={setSpecies} 
            setStatus={setStatus} 
            setpageNumber={setpageNumber}/>
          <div className="col-lg-8 col-12">
            <div className="row">
            <Cards page="/" results={results}/>
            </div> 
          </div>
        </div>
      </div>
      <div className="">
        <Pagination info={info} pageNumber={pageNumber} setpageNumber={setpageNumber}/>
      </div>
    </div>
  );
}

export default App;
