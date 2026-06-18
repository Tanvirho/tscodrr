import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { LanguageSector } from "./LanguageSector";
import { Output } from "./Output";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../assets/data";
import { executeCode } from "../assets/api"; 

export const CodeEditor = () => {

  const defaultSnippet = CODE_SNIPPETS["javascript"] || ""; 
  const editorRef = useRef(null);
  const [value, setValue] = useState(defaultSnippet);
  const [language, setLanguage] = useState("javascript");
  
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setValue(CODE_SNIPPETS[newLanguage] || ""); 
  };

  const runCode = async () => {
    if (!editorRef.current) return;
    
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode.trim()) return;

    setIsLoading(true);
    setIsError(false);

    try {
      const version = LANGUAGE_VERSIONS[language];
      const result = await executeCode(language, sourceCode, version);
      
      if (result.error) {
        setIsError(true);
        setOutput(result.error);
      } else {
        setIsError(false);
        setOutput(result.output || "Code executed successfully.");
      }
    } catch (error) {
      setIsError(true);
      setOutput(error.response?.data?.message || "Compiler server is temporarily overloaded. Please try again in a few moments!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-screen-2xl mx-auto h-full">
      <div className="flex items-center justify-between bg-[#1e1e2e] p-3 rounded-xl border border-gray-800 shadow-md">
        <LanguageSector onLanguageChange={handleLanguage} currentLanguage={language} />
        <button 
          onClick={runCode}
          disabled={isLoading}
          className={`text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md ${
            isLoading ? "bg-gray-600 cursor-not-allowed opacity-50" : "bg-green-600 hover:bg-green-500 active:scale-95"
          }`}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[75vh]">
        <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col h-full">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            value={value}
            onChange={(newValue) => setValue(newValue || "")}
            onMount={handleEditorDidMount}
            options={{  fontSize: 16, padding: { top: 16 }, wordWrap: "on" }}
          />
        </div>
        <div className="h-full">
          <Output output={output} isError={isError} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};