import React, { memo, useState } from 'react';
import { useGetReposByUsernameQuery } from '../services/githubApi';
import { Spinner, Box } from '@chakra-ui/react';
import RepoBox from './RepoBox';
import RepoPageSwitcher from './RepoPageSwitcher';

interface ReposProps {
  selectedUser: string;
}

const equalityFn = (prevProps: ReposProps, nextProps: ReposProps) =>
  prevProps.selectedUser === nextProps.selectedUser;

const Repos: React.FC<ReposProps> = memo(({ selectedUser }) => {
  const [page, setPage] = useState(1);
  const { data: repos, isLoading } = useGetReposByUsernameQuery(
    { username: selectedUser, page },
    {
      skip: !selectedUser,
    }
  );

  const noData = () => {
    if (!isLoading) {
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

  const isResult = () => Array.isArray(repos) && repos.length > 0;

  return (
    <div>
      <RepoPageSwitcher page={page} setPage={setPage} isResult={isResult()} />
      {isLoading && (
        <Box
          w='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          minH='240px'
        >
          <Spinner />
        </Box>
      )}
      {isResult()
        ? repos?.map((repo) => (
            <RepoBox
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
            />
          ))
        : noData()}
    </div>
  );
}, equalityFn);

export default Repos;
