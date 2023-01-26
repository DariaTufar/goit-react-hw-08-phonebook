import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      px="20"
      py="6"
      textAlign="right"
      bg="brand.500"
      color="bg.100"
    >
      <Text fontWeight="bold"  >
        Copyright &copy; 2023 by Dariia Shenkevych
      </Text>
    </Box>
  );
};
