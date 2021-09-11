import React, { useState } from 'react';
import { useGetUsersQuery } from './app/services/githubApi';
import SearchInput from './app/components/SearchInput';
import SearchResults from './app/components/SearchResults';
import ErrorBox from './app/components/ErrorBox';
import { Box } from '@chakra-ui/react';

function App() {
  const [search, setSearch] = useState('');

  const { data, error, isFetching, isUninitialized } = useGetUsersQuery(
    search,
    {
      skip: !search,
    }
  );

  return (
    <Box p={25} maxW={600} m='0 auto;'>
      <SearchInput isFetching={isFetching} setSearch={setSearch} />
      <ErrorBox error={error} />
      {!isFetching && (
        <SearchResults
          isUninitialized={isUninitialized}
          searchResults={data?.items}
        />
      )}
    </Box>
  );
}

export default App;
