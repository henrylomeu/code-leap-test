import React, { useState } from "react";
import MainScreen from "../MainScreen/mainscreen";
import './signup.css'

function Signup() {
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEnterClick();
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEnterClick = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <MainScreen username={username} />;
  }

  return (
    <div className="signup-container">
    <div className="signup-card">
        <h1 className="h1">Welcome to CodeLeap network!</h1>
        <div className="signup-form">
            <label htmlFor="username">Please enter your username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleKeyDown}
              placeholder="Henry"
              id="username"
            />
            <button
                disabled={!username}
                onClick={handleEnterClick}
            >
                Enter
            </button>
        </div>
    </div>
</div>
  );
  
}

export default Signup;
