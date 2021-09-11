import React, { useState } from 'react';
import Repos from './Repos';
import { GithubUser } from '../types';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

interface SearchResultsProps {
  isUninitialized: boolean;
  searchResults?: GithubUser[];
}

const SearchResults: React.FC<SearchResultsProps> = ({
  isUninitialized,
  searchResults,
}) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserClick = (username: string) => () => {
    setSelectedUser(username);
  };

  return (
    <Accordion reduceMotion allowToggle>
      {!isUninitialized &&
        searchResults?.map((item) => (
          <AccordionItem onClick={handleUserClick(item.login)} key={item.id}>
            <h2>
              <AccordionButton _expanded={{ bg: 'gray.200' }}>
                <Box flex='1' textAlign='left'>
                  {item.login}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.login === selectedUser && (
                <Repos selectedUser={selectedUser} />
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default SearchResults;
