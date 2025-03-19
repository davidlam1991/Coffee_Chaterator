import React, { useEffect } from "react";

const Details = ({ details, setDetails }) => {
  // Load Details
  useEffect(() => {
    chrome.storage.local.get(["theDetails"], (res) => {
      setDetails(res.theDetails);
    });
  }, []);

  // Save Details
  useEffect(() => {
    chrome.storage.local.set({ theDetails: details });
  }, [details]);

  return (
    <div className="details-textarea-container">
      <label>Specific details</label>
      <textarea
        placeholder="Enter specific details (e.g., event name, common interests), separated by commas."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="details-textarea"
      />
    </div>
  );
};

export default Details;
