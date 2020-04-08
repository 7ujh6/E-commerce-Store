import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) =>
{
    return <button type='submit' {...otherProps} className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}>{children}</button>
}

export default CustomButton;