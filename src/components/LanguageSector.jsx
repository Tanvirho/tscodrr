import React from "react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../assets/data"; // পাথ আপডেট
export const LanguageSector = ({ onLanguageChange, currentLanguage }) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="languages" className="text-gray-400 font-medium text-sm">
        Language:
      </label>
      
      <div className="relative">
        <select
          name="language"
          id="languages"
          value={currentLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="appearance-none bg-gray-800 text-gray-200 text-sm font-semibold border border-gray-600 hover:border-gray-500 px-4 py-2 pr-10 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer shadow-sm"
        >
          {Object.keys(CODE_SNIPPETS).map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()} ({LANGUAGE_VERSIONS[lang]})
            </option>
          ))}
        </select>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};