import { string, object } from 'yup';

const categoryValidationSchema = object().shape({
  name: string().nullable().required(),
  description: string(),
});

export default categoryValidationSchema;
