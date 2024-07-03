import AuthForm from '@/components/ui/AuthForm';
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <section className='flex-center size-full max-sm:px-6'>
            <AuthForm type = 'sign-up'/>
        </section>
        </div>
    );
};

export default SignUp;