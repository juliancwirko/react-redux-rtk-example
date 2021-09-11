import React, { memo } from 'react';
import { Input, Button } from '@chakra-ui/react';

interface SearchInputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const SearchInput: React.FC<SearchInputProps> = memo(
  ({ setSearch, isLoading }) => {
    const handleSubmit = (
      e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
    ) => {
      e.preventDefault();
      const searchQuery = e?.target?.['search-input']?.value;
      if (searchQuery?.length > 2) {
        setSearch(searchQuery.trim());
      } else {
        setSearch('');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <Input placeholder='Enter GitHub username' name='search-input' />
        <Button
          type='submit'
          colorScheme='blue'
          isLoading={isLoading}
          loadingText='Loading'
          w='100%'
          mt='20px'
          mb='20px'
        >
          Search
        </Button>
      </form>
    );
  }
);

export default SearchInput;
