import axios from "axios";

const API_KEY = process.env.OPENAI_API_KEY;

// export const generateText = (theUser, thePosition, username, format, selectedOption, selectedConnection, details) => {
//   return format;
// };

export const generateText = async (theUser, thePosition, username, format, selectedOption, selectedConnection, details) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `
            Write a LinkedIn coffee chat invitation message with these details, mus be within 300 characters:.

            My name: ${username}
            How we connected: ${selectedConnection}
            Their name: ${theUser}
            Their role & company: ${thePosition}
            Why I want to chat: ${selectedOption}
            Shared details: ${details}
            Tone: ${format}
            `,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Error generating text.";
  }
};
