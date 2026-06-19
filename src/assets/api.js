import axios from "axios";

const API = axios.create({
  baseURL: "https://judge0-ce.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    "x-rapidapi-key": "", 
    "Content-Type": "application/json"
  }
});


const LANGUAGE_ID_MAP = {
  javascript: 93, // Node.js 18
  typescript: 94, // TypeScript 5
  python: 71,     // Python 3.8
  java: 91,       // Java 17
  csharp: 51,     // C#
  php: 68,        // PHP
};

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/submissions?base64_encoded=false&wait=true", {
      source_code: sourceCode,
      language_id: LANGUAGE_ID_MAP[language] || 93,
    });
    

    const output = response.data.stdout || response.data.stderr || response.data.compile_output;
    return { output: output };
  } catch (error) {

  console.log("Error details:", error.response?.data || error.message);
  return { error: "Failed to execute code on Judge0 server." };
}
};
