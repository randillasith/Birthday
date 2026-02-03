import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What is the basic equation of accounting?",
    answer: "Assets = Liabilities + Equity. This equation must always balance."
  },
  {
    id: 2,
    question: "Explain the difference between Cash and Accrual accounting.",
    answer: "Cash accounting records transactions only when cash changes hands. Accrual accounting records revenues and expenses when they are incurred, regardless of when cash is exchanged."
  },
  {
    id: 3,
    question: "What are the three main financial statements?",
    answer: "1. The Balance Sheet (financial position at a point in time). 2. The Income Statement (financial performance over a period). 3. The Statement of Cash Flows (movement of cash)."
  },
  {
    id: 4,
    question: "What is a Bank Reconciliation?",
    answer: "The process of matching the balances in an entity's accounting records for a cash account to the corresponding information on a bank statement."
  },
  {
    id: 5,
    question: "What is the normal balance of an Asset account?",
    answer: "Debit. Assets normally have debit balances, while Liabilities and Equity normally have credit balances."
  }
];

const QuestionBank = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="question-bank">
      <h2>Interview Question Bank</h2>
      <div className="questions-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <div
              className="question-header"
              onClick={() => toggleAnswer(q.id)}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              <span>{q.question}</span>
              <span>{activeId === q.id ? '−' : '+'}</span>
            </div>
            {activeId === q.id && (
              <div className="answer-content">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;
