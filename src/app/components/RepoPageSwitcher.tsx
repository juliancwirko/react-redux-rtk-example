import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface RepoPageSwitcherProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  isResult: boolean;
}

const RepoPageSwitcher: React.FC<RepoPageSwitcherProps> = ({
  setPage,
  page,
  isResult,
}) => {
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  return (
    <Box display='flex' justifyContent='space-between'>
      <Button size='xs' disabled={page <= 1} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button size='xs' disabled={!isResult} onClick={handleNextPage}>
        Next
      </Button>
    </Box>
  );
};

export default RepoPageSwitcher;
