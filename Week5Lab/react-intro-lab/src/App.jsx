import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const App = () => {

    const cards = [
        {name: 'Bob', age: 25},
        {name: 'Charlie', age: 35},
        {name: 'Alice', age: 30}
        ];

    const SortAge = (newcards) => {
        return newcards.sort((a,b) => b.age - a.age);

    }
    // const sortedCards = SortAge(cards);

    return (
        <div>

            <CardContainer>

            <Greeting name= "Abhinav"></Greeting>
                {/*<UserCard name = 'Bob' age = {30}>  </UserCard>*/}
            {/*{cards.map(card => <UserCard name={card.name} age={card.age}/>)}*/}
                {SortAge(cards).map(card => <UserCard name={card.name} age={card.age}/>)}


            </CardContainer>

        </div>
    )
}

export default App;
