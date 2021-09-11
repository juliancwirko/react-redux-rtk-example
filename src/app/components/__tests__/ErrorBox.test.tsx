import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { render, screen } from '@testing-library/react';
import ErrorBox from '../ErrorBox';

test('renders ErrorBox', () => {
  const error: FetchBaseQueryError | SerializedError | undefined = {
    status: 'CUSTOM_ERROR',
    data: {
      message: 'Error!',
    },
    error: '',
  };
  render(<ErrorBox error={error} />);
  const errorElem = screen.getByText('Error!');
  expect(errorElem).toBeInTheDocument();
});
