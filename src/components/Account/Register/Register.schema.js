import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('First Name is required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Password confirm is required'),
});

export default RegisterSchema;
