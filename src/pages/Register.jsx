import { useEffect } from 'react';
import { ImUser } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Icon,
} from '@chakra-ui/react';

import { Button } from 'components/Button';
import { HeadingSection } from 'components/HeadingSection';
import { Input } from 'components/Input';
import { registerUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { clearErrors } from 'redux/userSlice';
import { useMyToast } from 'hooks/useMyToast';

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Contact name is required'),
  email: yup.string().required('E-mail is required'),
  password: yup
    .string()
    .min(7, 'At least 7 digits is required')
    .required('Password is required'),
  repeatedPassword: yup
    .string()
    .min(7, 'At least 7 digits is required')
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Please, confirm your password '),
});

const Register = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(selectors.errorRegister);
  const fetchRegister = useSelector(selectors.fetchRegister);
  const toast = useMyToast();

  // ==================== Errors handle  ====================
  useEffect(() => {
    if (errorRegister === 'ERR_BAD_REQUEST') {
      toast({
        description: 'The user was registered earlier! Please, Log in!',
        status: 'error',
      });
    } else if (errorRegister === 'ERR_NETWORK') {
      toast({
        description: 'Network Error! Check Internet connection!',
        status: 'error',
      });
    }

    dispatch(clearErrors());
  }, [dispatch, errorRegister, toast]);

  // ==================== Submit handle ====================
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(clearErrors());
    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  // ==================== return ====================
  return (
    <VStack
      as="main"
      justify="start"
      align="stretch"
      spacing="6"
      flexGrow="1"
      px="16"
      py="10"
      bg="bg.50"
    >
      <HeadingSection>Enter your data for registration, please.</HeadingSection>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} mx="auto" maxW="sm">
              {/* Name Input */}
              <FormControl isInvalid={errors.name}>
                <FormLabel color="brand.600" fontWeight="bold">
                  Name
                </FormLabel>
                <Input
                  name="name"
                  type="text"
                  icon={<Icon as={ImUser} color="brand.600" boxSize="6" />}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              {/* Email Input */}
              <FormControl isInvalid={errors.email}>
                <FormLabel color="brand.600" fontWeight="bold">
                  E-mail
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  icon={<EmailIcon color="brand.600" boxSize="5" />}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              {/* Password Input */}
              <FormControl isInvalid={errors.password}>
                <FormLabel color="brand.600" fontWeight="bold">
                  Password
                </FormLabel>
                <Input
                  name="password"
                  type="password"
                  icon={<LockIcon color="brand.600" boxSize="5" />}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              {/*confirm Password Input */}
              <FormControl isInvalid={errors.repeatedPassword}>
                <FormLabel color="brand.600" fontWeight="bold">
                  Confirm password
                </FormLabel>
                <Input
                  name="repeatedPassword"
                  type="password"
                  icon={<LockIcon color="brand.600" boxSize="5" />}
                />
                <FormErrorMessage>{errors.repeatedPassword}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                isLoading={fetchRegister}
                loadingText="Registering"
              >
                Register
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>
  );
};

export default Register;
