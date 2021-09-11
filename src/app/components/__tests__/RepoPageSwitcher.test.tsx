import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RepoPageSwitcher from '../RepoPageSwitcher';

describe('renders RepoPageSwitcher', () => {
  it('should properly handle prev and next button when first page', () => {
    const setPage = jest.fn();
    render(<RepoPageSwitcher page={1} isResult={true} setPage={setPage} />);
    const prevButton = screen.getByText('Prev');
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).not.toBeDisabled();
  });

  it('should properly handle next button', () => {
    const setPage = jest.fn();
    render(<RepoPageSwitcher page={20} isResult={false} setPage={setPage} />);
    const prevButton = screen.getByText('Prev');
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).not.toBeDisabled();
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  it('should properly handle setPage', () => {
    const setPage = jest.fn();
    render(<RepoPageSwitcher page={1} isResult={true} setPage={setPage} />);
    const nextButton = screen.getByText('Next');
    userEvent.click(nextButton);
    expect(setPage).toHaveBeenCalled();
  });
});
