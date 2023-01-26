import PropTypes from 'prop-types';
import { Button as ButtonStyled } from '@chakra-ui/react';

export const Button = ({ type, children, isLoading, loadingText }) => {
  return (
    <ButtonStyled
      type={type}
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme="accent"
      color="brand.500"
      bg="yellow.300"
      fontWeight="bold"
      minW="10rem"
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string.isRequired,
};
