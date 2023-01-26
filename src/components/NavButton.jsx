import { Button as ChakraButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavButton = ({ to, children }) => {
  return (
    <ChakraButton
      to={to}
      as={NavLink}
      fontSize="lg"
      colorScheme="accent"
      bg="yellow.300"
      fontWeight="bold"
      minW="10rem"
      color = "brand.300"
    >
      {children}
    </ChakraButton>
  );
};
