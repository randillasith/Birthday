import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LedgerChallenge from './LedgerChallenge';

describe('LedgerChallenge', () => {
  it('renders correctly', () => {
    render(<LedgerChallenge />);
    expect(screen.getByText('Live Ledger Challenge')).toBeInTheDocument();
  });

  it('allows adding an entry', () => {
    render(<LedgerChallenge />);

    const accountInput = screen.getByPlaceholderText('Account Name');
    const debitInput = screen.getByPlaceholderText('Debit');
    const addButton = screen.getByText('Add Entry');

    fireEvent.change(accountInput, { target: { value: 'Cash' } });
    fireEvent.change(debitInput, { target: { value: '500' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Cash')).toBeInTheDocument();
    const amounts = screen.getAllByText('500.00');
    expect(amounts.length).toBeGreaterThan(0);
  });

  it('shows unbalanced status when credits do not match debits', () => {
    render(<LedgerChallenge />);

    // Add debit
    fireEvent.change(screen.getByPlaceholderText('Account Name'), { target: { value: 'Cash' } });
    fireEvent.change(screen.getByPlaceholderText('Debit'), { target: { value: '500' } });
    fireEvent.click(screen.getByText('Add Entry'));

    expect(screen.getByText(/UNBALANCED/)).toBeInTheDocument();
  });

  it('shows balanced status when credits match debits', () => {
    render(<LedgerChallenge />);

    // Add debit
    fireEvent.change(screen.getByPlaceholderText('Account Name'), { target: { value: 'Cash' } });
    fireEvent.change(screen.getByPlaceholderText('Debit'), { target: { value: '500' } });
    fireEvent.click(screen.getByText('Add Entry'));

    // Add credit
    fireEvent.change(screen.getByPlaceholderText('Account Name'), { target: { value: 'Revenue' } });
    // Reset debit input first implicitly or just set credit
    fireEvent.change(screen.getByPlaceholderText('Debit'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Credit'), { target: { value: '500' } });
    fireEvent.click(screen.getByText('Add Entry'));

    expect(screen.getByText(/BALANCED/)).toBeInTheDocument();
  });
});
