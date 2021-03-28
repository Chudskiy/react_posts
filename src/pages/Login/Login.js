import React, {useContext} from 'react';
import RenderForm from '../../components/RenderForm/RenderForm';
import {LoginCard, Wrapper} from "./StyledLogin";
import LoginValidationSchema from "./LoginValidationSchema";
import api from "../../api";
import {AuthContext} from "../../Context/AuthContext";
import {fetchUserAsync} from "../../store/actions/actions";
import {useDispatch} from "react-redux";

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

const Login = ({history}) => {
    const {signin} = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        await api.login(values)
            .then(res => {
                dispatch(fetchUserAsync())
                signin(res.data);

                history.push('/');
            })
    };

    return (
        <div>
            <Wrapper>
                <LoginCard title='Login'>
                    <RenderForm
                        handleSubmit={handleSubmit}
                        initialValues={initialValues}
                        inputs={formInputs}
                        submitButtonLabel="Login"
                        ValidationSchema={LoginValidationSchema}
                    />
                </LoginCard>
            </Wrapper>
        </div>
    );
};

export default Login;
