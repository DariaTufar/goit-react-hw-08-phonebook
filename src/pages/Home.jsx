 
import { VStack,  Flex, Box   } from '@chakra-ui/react';
 
import { NavButton } from 'components/NavButton';
import  ImagePhone  from  '../images/phone.jpg' 

const Home = () => {
  return (
    <VStack
      as="main"
      justify="center"
      align="center"
      spacing="16"
      flexGrow="1"
      p="16"
      backgroundImage={ImagePhone}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
    
      
      <Box></Box>
      <Flex gap={4} as="div">
        <NavButton to="register"  >Register</NavButton>
        <NavButton to="login">Log in</NavButton>
      </Flex>
    </VStack>
  );
};

export default Home;
