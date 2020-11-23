import React, {useState} from 'react'

function DislikeButton() {

    const [like, setLike]= useState(0);
    const handleClick=() => setLike(like + 1);
  
   return (
        <div>
            
            <button style={{color:"blue", backgroundColor:"white"}} onClick={handleClick} >Dislike</button>

        </div>
    )
}

export default DislikeButton
