import React from "react";

export const Output = ({ output, isError, isLoading }) => {
  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-300">Output</h2>
      </div>


      <div
        className={`flex-grow p-4 rounded-xl border text-sm font-mono overflow-y-auto ${
          isError
            ? "border-red-500 text-red-400 bg-red-900/10" // এরর হলে লাল রঙ
            : "border-gray-800 text-gray-200 bg-[#1e1e2e]"  // স্বাভাবিক আউটপুটের রঙ
        } shadow-inner`}
      >
        {isLoading ? (
          <div className="text-gray-500 italic flex items-center gap-2">
            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500"></span>
            Running code...
          </div>
        ) : output ? (
          <pre className="whitespace-pre-wrap">{output}</pre>
        ) : (
          <span className="text-gray-500">
            Click "Run Code" to see the output here...
          </span>
        )}
      </div>
    </div>
  );
};