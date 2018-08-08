import * as Yup from 'yup';

const RosterAddSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Firt name is required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Last name is required'),
  rating: Yup.number()
    .required('Rating is required'),
  handedness: Yup.string()
    .oneOf(['left', 'right'], 'Must choose handedness')
    .required('Handedness is required'),
});

export default RosterAddSchema;
