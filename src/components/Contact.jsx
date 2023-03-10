import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { Flex, Text, IconButton, Spinner } from '@chakra-ui/react';
import { deleteContact } from 'redux/operations';
import { selectors } from 'redux/selectors';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);

  return (
    <Flex align="center" gap="3" as="li">
      <PhoneIcon boxSize={5} color="accent.400" />
      <Text flexGrow="1" fontSize="xl" fontWeight="bold" color="gray.600">
        {name}:
      </Text>
      <Text fontSize="xl" color="gray.600">
        {number}
      </Text>
      <IconButton
        name={id}
        type="button"
        aria-label="Remove contact"
        onClick={() => dispatch(deleteContact(id))}
        color="brand.600"
        bg="transparent"
        icon={
          isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="yellow.100"
              color="brand.600"
              size="lg"
            />
          ) : (
            <DeleteIcon boxSize={7} />
          )
        }
      />
    </Flex>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
