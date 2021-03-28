import React from 'react';
import RenderForm from "../../components/RenderForm/RenderForm";
import SignupValidationSchema from "./SignupValidationSchema";
import {StyledCard, Wrapper} from "./StyledSignup";
import {useDispatch} from "react-redux";
import {signupAsync} from "../../store/actions/actions";

const formInputs = [
    {
        label: 'Your username',
        name: 'username',
        placeholder: 'Enter your username',
    },
    {
        label: 'Your password',
        name: 'password',
        placeholder: 'Enter your password',
    },
];

const initialValues = {
    username: '',
    password: '',
};

const Signup = ({history}) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        dispatch(signupAsync(values));

        history.push('/login');
    };

    return (
        <Wrapper>
            <StyledCard title='Sign Up'>
                <RenderForm
                    handleSubmit={handleSubmit}
                    initialValues={initialValues}
                    inputs={formInputs}
                    submitButtonLabel="Sign Up"
                    ValidationSchema={SignupValidationSchema}
                />
            </StyledCard>
        </Wrapper>
    );
};

export default Signup;



