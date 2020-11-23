import React from 'react'


export default function Form() {
    return (
      <div>
            <form>
            <label>First name:</label>
            <input type="text" id="fname" name="fname" value="John"/><br></br>
            <label >Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe"/><br></br>

          
           <button style={{color:"blue", backgroundColor:"white"}}>submit</button>
        </form>
      </div>
    )
    }

