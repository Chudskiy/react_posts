import React from 'react';
import RenderForm from '../../components/RenderForm/RenderForm';
import {LoginCard, Wrapper} from "./StyledPost";
import PostValidationSchema from "./PostValidationSchema";
import {useDispatch} from "react-redux";
import {createPostAsync} from "../../store/actions/actions";

const formInputs = [
    {
        label: 'Post title',
        name: 'title',
        placeholder: 'Enter post title',
    },
    {
        label: 'Post body',
        name: 'body',
        placeholder: 'Enter post body',
    },
    {
        label: 'Post image',
        name: 'image',
        placeholder: 'Enter post image',
    },
];

const initialValues = {
    title: '',
    body: '',
    image: '',
};

const PostForm = ({history}) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        dispatch(createPostAsync(values));

        history.push('/');
    };


    return (
        <div>
            <Wrapper>
                <LoginCard title='Add Post'>
                    <RenderForm
                        handleSubmit={handleSubmit}
                        initialValues={initialValues}
                        inputs={formInputs}
                        submitButtonLabel="Add Post"
                        ValidationSchema={PostValidationSchema}
                    />
                </LoginCard>
            </Wrapper>
        </div>
    );
};

export default PostForm;
