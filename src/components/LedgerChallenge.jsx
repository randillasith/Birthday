import React, { useState } from 'react';

const LedgerChallenge = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ account: '', debit: '', credit: '' });
  const [scenario] = useState("Scenario: The company purchased Office Supplies for $500 using Cash.");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const addEntry = () => {
    if (!newEntry.account) return;

    // Ensure at least one value is entered and normalize empty strings to 0
    const deb = parseFloat(newEntry.debit) || 0;
    const cred = parseFloat(newEntry.credit) || 0;

    const entry = {
      id: Date.now(),
      account: newEntry.account,
      debit: deb,
      credit: cred
    };

    setEntries([...entries, entry]);
    setNewEntry({ account: '', debit: '', credit: '' });
  };

  const removeEntry = (id) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const totalDebits = entries.reduce((sum, e) => sum + e.debit, 0);
  const totalCredits = entries.reduce((sum, e) => sum + e.credit, 0);
  const isBalanced = totalDebits === totalCredits && entries.length > 0;
  const difference = Math.abs(totalDebits - totalCredits);

  return (
    <div className="ledger-challenge">
      <h2>Live Ledger Challenge</h2>
      <div className="scenario-box">
        <p><strong>{scenario}</strong></p>
        <button onClick={() => setEntries([])} className="reset-btn">Reset</button>
      </div>

      <div className="entry-form">
        <input
          type="text"
          name="account"
          placeholder="Account Name"
          value={newEntry.account}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="debit"
          placeholder="Debit"
          value={newEntry.debit}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="credit"
          placeholder="Credit"
          value={newEntry.credit}
          onChange={handleInputChange}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>

      <table className="ledger-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.account}</td>
              <td>{entry.debit > 0 ? entry.debit.toFixed(2) : ''}</td>
              <td>{entry.credit > 0 ? entry.credit.toFixed(2) : ''}</td>
              <td>
                <button onClick={() => removeEntry(entry.id)} className="delete-btn">x</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={isBalanced ? "balanced" : "unbalanced"}>
            <td><strong>Totals</strong></td>
            <td><strong>{totalDebits.toFixed(2)}</strong></td>
            <td><strong>{totalCredits.toFixed(2)}</strong></td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <div className={`status-message ${isBalanced ? 'success' : 'error'}`}>
        {entries.length === 0 ? "Enter transactions above." :
          isBalanced
            ? "✓ BALANCED"
            : `⚠ UNBALANCED (Diff: ${difference.toFixed(2)})`
        }
      </div>
    </div>
  );
};

export default LedgerChallenge;
