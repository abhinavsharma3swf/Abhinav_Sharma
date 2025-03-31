import {diceIcons} from "../helper.js";


export const Dice = ({number}) => {
    const icon = diceIcons[number];

    return (
        <div className={`fas fa-dice-${icon}`} style={{ color: "navy", fontSize: "15rem", margin: "2rem" }}>

        </div>
    );
};
