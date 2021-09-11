import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from '../SearchInput';

describe('renders SearchInput form', () => {
  it('should properly handle loading state', () => {
    const search = jest.fn();
    render(<SearchInput isLoading={true} setSearch={search} />);
    const loading = screen.getByText('Loading');
    expect(loading).toBeInTheDocument();
  });

  it('should properly handle not loading state', () => {
    const search = jest.fn();
    render(<SearchInput isLoading={false} setSearch={search} />);
    const button = screen.getByText('Search');
    expect(button).toBeInTheDocument();
  });
});
