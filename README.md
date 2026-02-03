# USA Bookkeeping Interview - Live Assessment Tool

A React-based application designed for conducting live technical interviews for US bookkeeping positions. It includes a question bank and an interactive ledger challenge to test candidates' knowledge of double-entry accounting.

## Features

- **Question Bank:** Common interview questions (GAAP, accrual vs cash, etc.) with hidden answers.
- **Ledger Challenge:** An interactive tool to enter journal entries. It validates if Debits equal Credits.
- **Responsive Design:** Works on various screen sizes and supports dark/light modes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  Clone the repository or download the files.
2.  Open your terminal in the project directory.
3.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the local development server:

```bash
npm run dev
```

The terminal will show a local URL (usually `http://localhost:5173/`). Open this URL in your browser to use the app.

### Running Tests

To run the automated tests for the Ledger component:

```bash
npx vitest
```

## Project Structure

- `src/components/QuestionBank.jsx`: Contains the interview questions and logic.
- `src/components/LedgerChallenge.jsx`: The interactive accounting ledger.
- `src/App.jsx`: Main layout.
