import React,{useState, useEffect}from 'react'
import Hero from '../src/components/Hero/Hero'

require("es6-promise").polyfill();
require("isomorphic-fetch")

const App = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

useEffect(()=>{
  fetch("https://randomuser.me/api/?results=200&nat=us")
     .then((response) => response.json())
     .then((json)=> setData(json))
})


  return (
    <div className="hero">
      <Hero />
      
    </div>
    
  );
}

export default App;
