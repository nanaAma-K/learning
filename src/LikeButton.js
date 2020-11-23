import React, {useState} from 'react'

function LikeButton() {
        
    const [like, setLike]= useState(0);
  const handleClick=() => setLike(like + 1);


    return (
        <div>
<button style={{color:"blue", backgroundColor:"white"}} onClick={handleClick} >Like</button>
        </div>
    )
} 

export default LikeButton
