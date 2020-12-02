import React, {useEffect, useState} from 'react';
const Example = (props) => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
    console.log(people.length);
    return (
        <div>
    
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Example;