import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#DCEDF9', //  blueish   from  light to dark
      100: '#96C9ED',
      200: '#73B7E7',
      300: '#51A5E1',
      400: '#2389D1',
      500: '#1B679D',
      600: '#15507A',
      700: '#0F3957',
      800: '#061623',
      900: '#030B11',
    },
    accent: {
      
      50: '#E7C6C9', //  pinkish from light to dark
      100: '#D59A9F',
      200: '#C97E84',
      300: '#B7525B',
      400: '#9E424A',
      500: '#81363C',
      600: '#652A2F',
      700: '#481E22',
      800: '#2B1215',
      900: '#1D0C0E',
    },
    bg: {
      50: '#F5F4F4', // beige from light to dark
      100: '#E2DFDF',
      200: '#C5BFBF',
      300: '#B1A9A9',
      400: '#948989',
      500: '#817474',
      600: '#6B6161',
      700: '#705029',
      800: '#403A3A',
      900: '#2B2727',
    },
    yellow: {
      50: '#FFF985', // yellow from light to dark
      100: '#E0DA29',
      200: '#FFF700',
    },
  },
});
