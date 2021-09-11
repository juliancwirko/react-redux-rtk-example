import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoBox from '../RepoBox';

test('renders RepoBox', () => {
  render(<RepoBox name='name' description='description' stars={20} />);
  const nameElem = screen.getByText('name');
  const descElem = screen.getByText('description');
  const starsElem = screen.getByText('20');
  expect(nameElem).toBeInTheDocument();
  expect(descElem).toBeInTheDocument();
  expect(starsElem).toBeInTheDocument();
});
