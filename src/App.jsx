import React from 'react';
import { CodeEditor } from './components/CodeEditor';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-gray-300 flex flex-col font-sans">
      
      <header className="px-6 py-4 border-b border-gray-800 bg-[#181825]">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-blue-500">Ts</span>Codrr
        </h1>
      </header>
      <main className="flex-grow p-4 md:p-6">
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;