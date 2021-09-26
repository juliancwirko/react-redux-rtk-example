import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

interface ErrorBoxProps {
  error?: FetchBaseQueryError | SerializedError | undefined;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ error }) => {
  const getError = () => {
    if (error) {
      const errorData = (error as FetchBaseQueryError).data as {
        message: string;
      };
      return errorData?.message;
    }
    return null;
  };

  const errorMsg = getError();

  return <>{errorMsg ? <div>{errorMsg}</div> : null}</>;
};

export default ErrorBox;
