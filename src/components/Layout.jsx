import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import { UserMenu } from 'components/UserMenu';
import { Footer } from 'components/Footer';
import SuspenedPage from 'pages/SuspenedPage';

const Layout = () => {
  return (
    <VStack
      mx="auto"
      maxW="container.sm"
      boxShadow="2xl"
      minH="100vh"
      align="stretch"
      spacing="0"
    >
      <UserMenu />
      <Suspense fallback={<SuspenedPage />}>
        <Outlet />
      </Suspense>
      <Footer />
    </VStack>
  );
};

export default Layout;
