import React from 'react'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Signup from './Signup'
import PreLogin from './PreLogin'
import Verification from './Verification'
import ResetPassword from './ResetPassword'




const auth_pages = {
    Login: Login,
    ForgotPassword: ForgotPassword,
    Signup: Signup,
    PreLogin: PreLogin,
    Verification: Verification,
    ResetPassword: ResetPassword
}


export default auth_pages;