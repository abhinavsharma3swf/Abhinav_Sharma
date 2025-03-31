import {use, useState, useTransition} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {generateRandom} from "./assets/helper.js";
import {Dice} from "./assets/components/Dice.jsx";
import {motion} from 'framer-motion';



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
            <div className="App text-center">
                        <div className="text">

                            <div className="inside">
                            <h1>Welcome to Ultimate dice roller 🎲</h1>
                            </div>

                        </div>

                <div className="main">
                <motion.div id="motion"
                    animate={{ x: [0, 20, -20, 20, 0], rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.8 }}
                    className="container d-flex justify-content-center my-4"
                >

                    <Dice number={dice1} />
                    <Dice number={dice2} />

                </motion.div>

                </div>

                <div>
                <button type="button" onClick={handleclick} className="btn btn-outline-success">Click to Roll</button>
                </div>

                <div className='total'>
                    <h2> Total = {total}</h2>
                </div>
            </div>
        )
    }


export default App


