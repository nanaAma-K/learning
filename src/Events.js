import React from 'react'

function Events() {
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/1/")
        .then(res) =>{
            console.log(res.data);
            setCharacter(res.data);
        }
    }

    )
    .catch((err)=> console.error(err));

    return (
        <div>
          <h1>{character.name}</h1>
          <h2>{character.eye_color}</h2>
;


        </div>
        
    )
}

export default Events
