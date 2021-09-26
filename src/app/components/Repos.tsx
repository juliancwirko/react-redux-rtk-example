import React, { useState } from 'react';
import { useGetReposByUsernameQuery } from '../services/githubApi';
import { Spinner, Box } from '@chakra-ui/react';
import RepoBox from './RepoBox';
import RepoPageSwitcher from './RepoPageSwitcher';
import ErrorBox from './ErrorBox';

interface ReposProps {
  selectedUser: string;
}

const Repos: React.FC<ReposProps> = ({ selectedUser }) => {
  const [page, setPage] = useState(1);
  const {
    data: repos,
    isFetching,
    error,
  } = useGetReposByUsernameQuery(
    { username: selectedUser, page },
    {
      skip: !selectedUser,
    }
  );

  const noData = () => {
    if (error) {
      return (
        <Box color='red.500' marginTop='5px' marginBottom='5px'>
          <ErrorBox error={error} />
        </Box>
      );
    }
    if (!isFetching) {
      return (
        <Box
          marginTop='5px'
          marginBottom='5px'
          display='flex'
          justifyContent='space-between'
          backgroundColor='gray.100'
          padding='20px'
          borderRadius='3px'
          alignItems='flex-start'
        >
          No repos found!
        </Box>
      );
    }
    return '';
  };

  const isResult = !error && Array.isArray(repos) && repos.length > 0;

  return (
    <Box position='relative'>
      <RepoPageSwitcher page={page} setPage={setPage} isResult={isResult} />
      {isFetching && (
        <Box
          w='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Spinner />
        </Box>
      )}
      {isResult
        ? repos?.map((repo) => (
            <RepoBox
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
            />
          ))
        : noData()}
    </Box>
  );
};

export default Repos;
