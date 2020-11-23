import React from 'react'

function LogoutButton() {

    function handleLogout(e){
        e.preventDefault();
       

  }



    return (
        <div>
             <button onClick={handleLogout}>Logout</button>
            
        </div>
    )
}

export default LogoutButton
