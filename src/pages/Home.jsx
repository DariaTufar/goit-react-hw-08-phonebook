 
import { VStack,  Flex, Box   } from '@chakra-ui/react';
import { HeadingSection } from 'components/HeadingSection';
import { NavButton } from 'components/NavButton';

const Home = () => {
  return (
    <VStack
      as="main"
      justify="center"
      align="center"
      spacing="16"
      flexGrow="1"
      p="16"
      bg="bg.100"
      backgroundImage="url('../../images/phone.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
    
      <HeadingSection
        fontSize="5xl"
        
      >
        The Best Phonebook App Ever
      </HeadingSection>
      {/* <Icon as={RiContactsBookFill} color="yellow.300" boxSize="60" /> */}
      <Box
        backgroundImage="url('../../images/phone.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Box>
      <Flex gap={4} as="div">
        <NavButton to="register">Register</NavButton>
        <NavButton to="login">Log in</NavButton>
      </Flex>
    </VStack>
  );
};

export default Home;
