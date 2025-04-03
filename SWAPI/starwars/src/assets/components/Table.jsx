const Table =({data}) => {


if(!data)
    return(<h1>Loading</h1>);

return (
        <div className="App">

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
                </thead>

                <tbody>
                {data.map((row, index) => {
                    const {name, height, hair_color, gender} = row;
                    return <tr key = {index + 'r'}>
                        <td>{name}</td>
                        <td>{height}</td>
                        <td>{hair_color}</td>
                        <td>{gender}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );

}
export default Table;
