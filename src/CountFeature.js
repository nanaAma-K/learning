import React, {useState} from 'react'



function Age() {
  const [age, setAge]= useState(19);
  const handleClick=() => setAge(age + 1);

    return (
      <div> 
     <h3>Today i am {age} years old</h3>
     <button onClick={handleClick}> Click Here </button>
     
    </div>
  );
}

export default Age;
