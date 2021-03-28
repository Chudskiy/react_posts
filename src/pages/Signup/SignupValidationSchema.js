import { object, string} from 'yup';

const SignupValidationSchema = object().shape({
    password: string().min(8).max(16).required(),
    username: string().max(30).required(),
});

export default SignupValidationSchema;
