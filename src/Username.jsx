import React, { useState, useEffect } from "react";

const Username = ({ username, setUsername }) => {
  const [isEditing, setIsEditing] = useState(true);

  // Load username
  useEffect(() => {
    chrome.storage.local.get(["theUsername"], (res) => {
      const storedUsername = res.theUsername;
      setUsername(storedUsername);
      if (storedUsername) {
        setIsEditing(false);
      }
    });
  }, [setUsername]);

  // Save username
  useEffect(() => {
    chrome.storage.local.set({ theUsername: username });
  }, [username]);

  const handleBlur = () => {
    if (username.trim() === "") {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  return (
    <div className="username-input-container">
      {isEditing || username === "" ? (
        <input
          type="text"
          autoFocus
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) =>
            e.key === "Enter" && username !== "" && setIsEditing(false)
          }
          className="username-input"
        />
      ) : (
        <span onClick={() => setIsEditing(true)} className="username-display">
          {username || "Your Name"}
        </span>
      )}
    </div>
  );
};

export default Username;
