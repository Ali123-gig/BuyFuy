import React from 'react'
import GoogleSignin from '../../Components/GoogleSignin/GoogleSignin'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignOut from '../../Components/SignOut/SignOut'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Authentication = () => {
    return (
        <div>
            <h1>Authentication Page</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleSignin/>
            <SignOut/>
        </div>
    )
}

export default Authentication
