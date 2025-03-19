import React, { useEffect } from "react";

const FormatOptions = ({ format, setFormat }) => {
  // Load Format
  useEffect(() => {
    chrome.storage.local.get(["theFormat"], (res) => {
      setFormat(res.theFormat);
    });
  }, []);

  // Save Format
  useEffect(() => {
    chrome.storage.local.set({ theFormat: format });
  }, [format]);

  return (
    <div className="format-options-container">
      <label>Message Tone</label>
      <div
        className={`toggle-container ${
          format === "Formal" ? "formal" : "causal"
        }`}
        onClick={() => setFormat(format === "Casual" ? "Formal" : "Casual")}
      >
        <div className="toggle-slider"></div>
        <span className="option casual">Casual</span>
        <span className="option formal">Formal</span>
      </div>
    </div>
  );
};

export default FormatOptions;
