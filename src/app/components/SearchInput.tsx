import React, { memo, useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

interface SearchInputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
}

const SearchInput: React.FC<SearchInputProps> = memo(
  ({ setSearch, isFetching }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (
      e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
    ) => {
      e.preventDefault();
      if (inputValue?.length > 2) {
        setSearch(inputValue.trim());
      } else {
        setSearch('');
      }
    };

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Enter GitHub username'
          name='search-input'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Box height='30px' fontSize='14px'>
          {inputValue && <>Showing user for: "{inputValue}"</>}
        </Box>
        <Button
          type='submit'
          colorScheme='blue'
          isLoading={isFetching}
          loadingText='Loading'
          w='100%'
          mb='20px'
        >
          Search
        </Button>
      </form>
    );
  }
);

export default SearchInput;
