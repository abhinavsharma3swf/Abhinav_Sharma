import {use, useState, useTransition} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {generateRandom} from "./assets/helper.js";
import {Dice} from "./assets/components/Dice.jsx";


function App() {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const [total, setTotal] = useState(2);

    const handleclick = () => {
        const random1 = (generateRandom());
        const random2 = (generateRandom());
        setDice1(random1);
        setDice2(random2);
        const total = (random1 + 1) + (random2 + 1);
        setTotal(total);
    };

        return (
            <div className="App">
                <div className="text">
                    <center>
                        <h1>Welcome to Ultimate dice roller 🎲</h1>
                    </center>
                </div>
                <div className="container">
                    <Dice className = 'dice1' number={dice1}></Dice>
                    <Dice number={dice2}></Dice>
                </div>
                <button type="button" onClick={handleclick} className="btn btn-outline-success">Click to Roll</button>
                <div className='total'>
                    <h2> Total = {total}</h2>
                </div>
            </div>

        )
    }


export default App
