import React from 'react'
import { connect } from 'react-redux';
import { siginout } from './../../Redux/auth/authActions';



const SignOut = ({siginout}) => {
    return (
        <div>
            <button onClick={siginout}>SignOut</button>
        </div>
    )
}

var action={
    siginout,
}

export default connect(null,action)(SignOut)
