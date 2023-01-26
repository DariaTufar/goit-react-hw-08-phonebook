import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const Link = ({ to, children }) => {
  return (
    <ChakraLink
      to={to}
      as={NavLink}
      fontSize="md"
      borderBottom="2px solid transparent"
      _activeLink={{ borderBottomColor: 'yellow' }}
      _hover={{ borderBottomColor: 'white', color: 'yellow.300' }}
    >
      {children}
    </ChakraLink>
  );
};
