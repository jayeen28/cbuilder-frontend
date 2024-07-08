import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const { handleSubmit, register } = useForm();
    const { login } = useAuth();

    const onSubmit = (data) => {
        login(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='Your email' required {...register('email')} maxLength={50} />
                <input type='password' placeholder='Your password' required {...register('password')} minLength={8} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
