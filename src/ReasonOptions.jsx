import React, { useEffect } from "react";

const ReasonOptions = ({ selectedOption, setSelectedOption }) => {
  const handleChange = (e) => {
    const selectedText = e.target.value;
    setSelectedOption(selectedText);
  };

  // Load Reason
  useEffect(() => {
    chrome.storage.local.get(["theSelectedOption"], (res) => {
      const storedOption = res.theSelectedOption;
      setSelectedOption(storedOption);
    });
  }, []);

  // Save Reason
  useEffect(() => {
    chrome.storage.local.set({ theSelectedOption: selectedOption });
  }, [handleChange]);

  return (
    <div className="reason-dropdown-container">
      <label htmlFor="reason-dropdown">Reason for Coffee Chat</label>
      <select
        id="reason-dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="reason-dropdown"
      >
        <option value=""></option>
        <option value="Career advice">Career advice</option>
        <option value="Networking">Mutual interest</option>
        <option value="Industry insights">Industry insights</option>
        <option value="Job opportunity">Potential collaboration</option>
      </select>
    </div>
  );
};

export default ReasonOptions;
