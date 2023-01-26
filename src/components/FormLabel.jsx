import { FormLabel as FormLabelChakra } from '@chakra-ui/react';

export const FormLabel = ({ children }) => {
  return (
    <FormLabelChakra color="brand.500" fontWeight="bold">
      {children}
    </FormLabelChakra>
  );
};
