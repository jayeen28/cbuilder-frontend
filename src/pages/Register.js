import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthProvider';

const Register = () => {
    const { handleSubmit, register } = useForm();
    const { register: registerUser } = useAuth();

    const onSubmit = data => {
        registerUser(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='Your email' required {...register('email')} maxLength={50} />
                <input type='password' placeholder='Your desired password' required {...register('password')} minLength={8} />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;
