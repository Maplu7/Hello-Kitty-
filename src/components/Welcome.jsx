import React from "react";
import "./Welcome.css";

const Welcome = ({ student, onLogout }) => {
  const name = student?.name;

  return (
        <div className='wrapper welcome-bg'>
            <h1>WELCOME{name ? `, ${name}` : ""}:</h1>
            <p>Let's get started!</p>

      <div className="buttons">
        <button>PLAY GAME</button>
         <button>ASSIGNMENTS</button>
        <button onClick={onLogout}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Welcome;
