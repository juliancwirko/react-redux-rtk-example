import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

interface RepoBoxProps {
  stars: number;
  name: string;
  description: string;
}

const RepoBox: React.FC<RepoBoxProps> = memo(({ name, description, stars }) => {
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
      <Box marginRight='30px'>
        <Box>{name}</Box>
        <Box>{description}</Box>
      </Box>
      <Box display='flex' alignItems='center' fontSize='14px'>
        {stars} <StarIcon marginLeft='5px' />
      </Box>
    </Box>
  );
});

export default RepoBox;
