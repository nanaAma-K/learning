import React, {useState} from 'react'

function LogInForm() {
            
  const[email, setEmail]= useState("")
  const[password, setPassword]= useState("")
  const[LoggedIn, setLoggedIn]= useState(false)
  
  
  const handleEmailInput=(event)=>{
  
  setEmail(event.target.value)
  
  }
  
  const handlePasswordInput = (event)=> {
  
  setPassword(event.target.value)
  
  };
  
  function handleLoggedin(event){
  
    event.preventDefault();
    if (email === "Ama@gmail.com" && password === "abcd"){
      setPassword.Loggedin(true)
    }
  }
  

  function handleLogout(event){
    event.preventDefault();
    setLoggedIn(false)
    

  }
 

  return (
    <div>

    {
      LoggedIn
      ?
      <>
       <h1>WELCOME TO MY BLOG</h1>
       <h2> Already have an account <br></br> Login Here</h2>
       <button onClick={handleLogout}>Logout</button>
      </>
      :

      <>
      <form>

      <h1>WELCOME TO MY BLOG</h1>
       <h2> Already have an account <br></br> Login Here</h2>
       

            <label>Email:</label>
            <input type="text" placeholder= "Enter Email"  value={email} onChange={handleEmailInput}/><br></br>

            
            
            <label>Password:</label>
            <input type="password" placeholder= "Enter Password" value={password} onChange= {(event) => handlePasswordInput(event)} /><br></br>

          
           <button style={{color:"blue", backgroundColor:"white"}} onClick= {handleLoggedin}>Login</button>
          
            
        </form>
        </>
        }
    </div>
  )
  }


  export default LogInForm
