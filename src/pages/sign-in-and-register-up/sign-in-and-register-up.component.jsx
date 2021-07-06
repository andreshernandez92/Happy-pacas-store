import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-register-up.styles.scss'



const SignInAndSignUpPage = () => (
<div className='sign-in-and-register-up'>
<SignIn></SignIn>
<SignUp></SignUp>
</div>
);

export default SignInAndSignUpPage;