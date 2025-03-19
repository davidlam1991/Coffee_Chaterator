import React, { useEffect } from "react";

const Connection = ({ selectedConnection, setSelectedConnection }) => {
  const handleChange = (e) => {
    const selectedText = e.target.value;
    setSelectedConnection(selectedText);
  };

  // Load Education
  useEffect(() => {
    chrome.storage.local.get(["theBackground"], (res) => {
      const storedBackground = res.theBackground;
      setSelectedConnection(storedBackground);
    });
  }, []);

  // Save Education
  useEffect(() => {
    chrome.storage.local.set({ theBackground: selectedConnection });
  }, [handleChange]);

  return (
    <div className="connection-dropdown-container">
      <label htmlFor="background-dropdown">Connection Context</label>
      <select
        id="background-dropdown"
        value={selectedConnection}
        onChange={handleChange}
        className="connection-dropdown"
      >
        <option value=""></option>
        <option value="Former colleague">Former colleague</option>
        <option value="School connection">School connection</option>
        <option value="Met at event">Met at event</option>
        <option value="Shared connection">Shared connection</option>
        <option value="Cold outreach">Cold outreach</option>
      </select>
    </div>
  );
};

export default Connection;
