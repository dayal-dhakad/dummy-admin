import * as Yup from 'yup';
import { isYupError, parseYupError } from '@/utils/Yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,3}$/i;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[~!@#$%^&*()/_=+[\]{}|;:,.<>?-])(?=.*[0-9])(?=.*[a-z]).{8,40}$/;

export const validateData = async (schema, inputData) => {
  return await schema
    .validate(inputData, {
      abortEarly: false,
    })
    .then(() => [true, null])
    .catch((err) => {
      if (isYupError(err)) {
        return [false, parseYupError(err)];
      }
      return [false, null];
    });
};

// Login Validation
export const signInValidationSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, 'Please enter valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Only accept One Uppercase and atleast one special characters and numbers',
    ),
});
export const createUserValidation = Yup.object({
  email: Yup.string()
    .matches(emailRegex, 'Please enter valid email')
    .required('Email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Only accept One Uppercase and atleast one special characters and numbers',
    ),
});
