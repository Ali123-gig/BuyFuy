import React from 'react'
import { connect } from 'react-redux';
import { googleSigin } from './../../Redux/auth/authActions';


const GoogleSignin = ({googleSigin}) => {
    return (
        <div>
            <button onClick={googleSigin}>Sign With google </button>
        </div>
    )
}

var action={
    googleSigin
}
export default connect(null,action)(GoogleSignin)
