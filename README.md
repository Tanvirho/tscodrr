```markdown
# TsCodrr 🚀

**TsCodrr** is a modern, browser-based code editor and compiler platform. It allows users to write and execute code in various programming languages (such as JavaScript, Python, Java, C#, etc.) directly within their browser.

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Editor:** Monaco Editor (provides a VS Code-like experience)
* **API Integration:** Axios
* **Build Tool:** Vite

## ✨ Features
* **Syntax Highlighting:** Beautiful syntax highlighting powered by Monaco Editor.
* **Multi-language Support:** Support for JavaScript, Python, Java, and many others.
* **Real-time Output:** Instant results in the output box upon code execution.
* **Responsive UI:** A modern and user-friendly interface.

## 📦 Setup Instructions

To run this project on your computer, follow these steps:

1. **Clone the repository:**
```bash
   git clone https://github.com/Tanvirho/tscodrr.git
   cd tscodrr

```

2. **Install dependencies:**

```bash
   npm install

```

3. **Run the project:**

```bash
   npm run dev

```

4. **API Configuration:**
Ensure the API URL is set up correctly in your `src/assets/api.js` file. If you are using a local server, make sure the `baseURL` matches your localhost configuration.

## ⚙️ Execution and Backend

This project relies on an API to execute the code.

* If you are using a third-party API (like Judge0), make sure to configure your `VITE_RAPIDAPI_KEY` in your `.env` file.
* To avoid downtime and for unlimited code execution, setting up a local **Piston** server using **Docker** is highly recommended.

## 👤 Contributing

If you have any suggestions or ideas for bug fixes, feel free to submit a Pull Request.

## ⚖️ License

This project is open-source under the MIT License.

```

```
