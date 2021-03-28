import React from 'react';
import { Formik } from 'formik';
import { Form, FormItem } from 'formik-antd';
import { Button } from 'antd';
import { InputLabel, StyledInput } from './StyledForm';

const RenderForm = ({
                        inputs, handleSubmit, ValidationSchema, initialValues, submitButtonLabel,
                    }) => (
    <>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ValidationSchema}
            render={({ errors }) => (
                <Form>
                    {inputs.map(({ name, label, placeholder }) => (
                        <FormItem key={name} name={name} validate={errors[name]}>
                            <InputLabel htmlFor={name}>{label}</InputLabel>
                            {!name.includes('password') ? (
                                <StyledInput size="large" name={name} placeholder={placeholder} style={{ marginTop: 10 }} />
                            ) : (
                                <StyledInput.Password size="large" name={name} placeholder={placeholder} style={{ marginTop: 10 }} />
                            )}
                        </FormItem>
                    ))}

                    <Button block type="primary" htmlType="submit" style={{ marginTop: 10 }} size="large">
                        {submitButtonLabel}
                    </Button>
                </Form>
            )}
        />
    </>
);

export default RenderForm;
