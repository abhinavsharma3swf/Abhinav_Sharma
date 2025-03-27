const UserCard = ({name, age}) => {

    const style = {
        border: 'red solid 5px',
        padding: '10px',
        marginBottom: '10px'
    }

    return (
        <div class="usercard">

            <div style={style}>
            <h2>Name: {name}</h2>
                <p>Age: {age}</p>
            </div>

        </div>
    )
}

export default UserCard;