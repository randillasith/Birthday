import React from 'react'
import QuestionBank from './components/QuestionBank'
import LedgerChallenge from './components/LedgerChallenge'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>USA Bookkeeping Interview - Live Assessment</h1>
        <p>Candidate Evaluation Tool</p>
      </header>

      <main className="main-content">
        <section className="section-left">
          <QuestionBank />
        </section>

        <section className="section-right">
          <LedgerChallenge />
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Interview Assessment Tool</p>
      </footer>
    </div>
  )
}

export default App
