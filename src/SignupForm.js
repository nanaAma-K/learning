import React from 'react'

function SignupForm() {
    return (
        <div>
           
            <form>
           

           <h1> Signup here to create an account</h1> <br></br>
            <label>Email:</label>
            <input type="text" placeholder= "Enter Email"  /><br></br>

            <label>First Name:</label>
            <input  type="text"placeholder= "Enter First Name" /> <br></br>

            <label>Last Name:</label>
            <input  type="text" placeholder= "Enter Last Name" /> <br></br>
            
            <label>Password:</label>
            <input type="password" placeholder= "Enter Password" /><br></br>

          
           <button style={{color:"blue", backgroundColor:"white"}}>Signup</button>
            
        </form>




        </div>
    )
}

export default SignupForm
