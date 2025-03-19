import React, { useState, useEffect } from "react";
import { generateText } from "./openai";

import FormatOptions from "./FormatOptions.jsx";
import ReasonOptions from "./ReasonOptions.jsx";
import Username from "./Username.jsx";
import Connection from "./Connection.jsx";
import Details from "./Details.jsx";

export default function Menu() {
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [hideMessage, setHideMessage] = useState(true);
  // Button
  const [copied, setCopied] = useState(false);
  const [dots, setDots] = useState("");
  // Username
  const [username, setUsername] = useState("");
  // FormatOptions
  const [format, setFormat] = useState("Casual");
  // ReasonOptions
  const [selectedOption, setSelectedOption] = useState("");
  // Connection
  const [selectedConnection, setSelectedConnection] = useState("");
  // Details
  const [details, setDetails] = useState("");

  const handleGenerateClick = () => {
    setGeneratedText("");
    // setLoading(true);

    // setTimeout(() => {
    //   setGeneratedText(generateText(format));
    //   setLoading(false);
    //   setHideMessage(false);
    // }, 3000);

    // setCopied(false);

    setLoading(true);

    chrome.storage.local.get(["theUser", "thePosition"], async (res) => {
      const theUser = res.theUser || "Unknown User";
      const thePosition = res.thePosition || "Unknown Position";

      const result = await generateText(
        theUser,
        thePosition,
        username,
        format,
        selectedOption,
        selectedConnection,
        details
      );
      setGeneratedText(result);
      setHideMessage(false);
      setLoading(false);
      setCopied(false);
    });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
  };

  const handleGeneratedTextChange = (e) => {
    setGeneratedText(e.target.value);
    setCopied(false);
  };

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="menu-container">
      <div className="form-content">
        {hideMessage && (
          <div>
            <div className="logo-container">
              <img src="/logo.png" alt="logo" className="logo" />
              <p className="logo-text">Coffee Chaterator</p>
            </div>
            <div>
              <Username username={username} setUsername={setUsername} />
              <Connection
                selectedConnection={selectedConnection}
                setSelectedConnection={setSelectedConnection}
              />
              <ReasonOptions
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
              <Details details={details} setDetails={setDetails} />
              <FormatOptions format={format} setFormat={setFormat} />
            </div>

            <button
              onClick={handleGenerateClick}
              type="submit"
              disabled={loading}
              className="generate-button"
            >
              <span className="generate-text">
                {loading ? `Generating${dots}` : "Generate"}
              </span>
            </button>
          </div>
        )}

        {!hideMessage && (
          <div>
            <button
              className="back-button"
              onClick={() => setHideMessage(true)}
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
            <textarea
              value={generatedText}
              onChange={handleGeneratedTextChange}
              placeholder="Generated text will appear here..."
              className="generated-text-textarea"
            />
            <button className="copy-button" onClick={handleCopyClick}>
              <i className="fa-solid fa-copy mr-2"></i>
              {copied ? " Copied" : " Copy"}
            </button>
          </div>
        )}
      </div>

      <div className="feedback-container">
        <a
          href="https://forms.gle/fK9LuTns3C2g8CyX7"
          className="feedbacks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feedbacks
        </a>
      </div>
    </div>
  );
}
