import React from "react";
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className='wrapper welcome-bg'>
            <h1>WELCOME{name ? `, ${name}` : ""}:</h1>
            <p>Let's get started!</p>

      <div className="buttons">
        <button>PLAY GAME</button>
         <button>ASSIGNMENTS</button>
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default Welcome;
