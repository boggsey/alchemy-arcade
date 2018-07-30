import * as Yup from 'yup';

const RosterAddSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Required'),
  rating: Yup.number()
    .required('Required'),
  handedness: Yup.string()
    .oneOf(['left', 'right'], 'Must choose handedness')
    .required('Required'),
});

export default RosterAddSchema;
