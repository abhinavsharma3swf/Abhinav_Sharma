import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Table from "./assets/components/Table.jsx";
import axios from "axios";
import {requestFormReset} from "react-dom";
import {table} from "table";


function App() {
  const [data, setData] = useState('')
    const [show, setShow] = useState(false)
  const url = "https://swapi.dev/api/people"

  const click =()=>{
    let endpoint = url
    setShow(true)
    //The error function
    axios.get(endpoint)
        .then(response => {
            setData(response.data.results)
            console.log("response", response.data.results)
        })
        .catch(err=>{
          console.error("Error", err.message)
        })

  }
  // const resetData = () => {
  //     setData()
  // }

  return (
    <div>
      <h1>SWAPI</h1>
        <h2>The Star Wars API</h2>
      <button onClick={click}> Click to generate</button>
        <button onClick={() => {
            setShow(false)}}>Reset</button>  {/*//Resting the table and removing the data//*/}
        {show ? <Table data={data}/> : null }
    </div>
  )
}

export default App
