import React, {useState} from 'react'


export default function App() {

const[email, setEmail]= useState("")
const[password, setPassword]= useState("")
const[LoggedIn, setLoggedin]= useState(false)


const handleEmailInput=(event)=>{

setEmail(event.target.value)

}

const handlePasswordInput = (event)=> {

setPassword(event.target.value)

};

function handleLogin(event){

  event.preventDefault();
  if (email === "Ama@gmail.com" && password === "abcd"){
    setPassword.Login(true)
  }
}

function handleLogout(event){
      event.preventDefault();
      setLoggedin(false)

}


  return (
    <div>
  {

  LoggedIn
          ?
          <>
          <p> Welcome To My Blog</p>
          <button onClick={handleLogout}>Logout</button>
          </>
          :

          <>
          <form>

           <label>Email</label>
              <input type="text" value={email} onChange={handleEmailInput} />

           <label>Password</label>   
               <input type= "password" value={password} onChange= {(event) => handlePasswordInput(event)}/>

               <br></br>
              
              <button onClick= {handleLogin}>Login</button>
          </form>
          </>

 }

    </div>
  );

}


