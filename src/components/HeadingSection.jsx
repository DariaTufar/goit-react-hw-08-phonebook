import { Heading } from '@chakra-ui/react';

export const HeadingSection = ({ children, ...props }) => {
  return (
    <Heading
      as="h1"
      fontSize="2xl"
      textAlign="center"
      color="brand.500"
      {...props}

    >  
      {children}
    </Heading>
  );
};
