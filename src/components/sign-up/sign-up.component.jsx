import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss';

class SignUp extends React.Component 
{
    constructor() {
        super();
        
        this.state = {
            display: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const  {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword)
        {
            alert("passwords don't match");
            return;
        }
        

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName);
            this.setState({displayName:'', email:'', password:'', confirmPassword:''});


        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
        }

    render() {
        const {display, email, password, confirmPassword} = this.state;


       return <div className='sign-up'><h2 className='title'>I do not have an account</h2>
       <span>Sign up with your email and password</span>
       <form className='sign-up-form' onSubmit={this.handleSubmit}>
           <FormInput handleChange={this.handleChange} type='text' label='Display Name' value={display} name ='display' />
           <FormInput handleChange={this.handleChange} type='email' label='Email' value={email} name ='email'/>
           <FormInput handleChange={this.handleChange} type='password' label='Password' value={password} name ='password' />
           <FormInput handleChange={this.handleChange} type='password' label='Confirm Password' value={confirmPassword} name ='confirmPassword'/>
               
           <CustomButton type='submit'>SIGN UP</CustomButton>
        
           
       </form></div>
    }
}

export default SignUp;