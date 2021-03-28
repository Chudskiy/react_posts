import { object, string} from 'yup';

const LoginValidationSchema = object().shape({
    password: string().min(8).max(16).required(),
    username: string().max(30).required(),
});

export default LoginValidationSchema;
