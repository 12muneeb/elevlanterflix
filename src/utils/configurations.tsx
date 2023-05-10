import * as React from 'react';
import { Utilities } from "../components"
import { theme } from "./constants"


type Pages = "LOGIN" | "FORGETPASS" | "SIGNUP" | "PRELOGIN" | "VERIFICATION" | "RESETPASSWORD" | "VIEWPROFILE" | "EDITPROFILE"
type Configuration = { [page in Pages]: PageConfigurations };

export const pageConfiguration: Configuration = {
    "PRELOGIN": {
        title: "PRE LOGIN",
        key: 'prelogin',
        actionText: "",
        fields: [
            {
                placeHolder: "SIGN IN WITH EMAIL",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.black} style={{ marginRight: 8, marginTop: 3 }} />,
                error: "Please enter proper email address.",
                key: 'email',
                type: "button_gradient",
                secure: false,
                gadients: [...theme.colors.gradientOrange],
                fontColor: theme.colors.black
            },
            {
                placeHolder: "SIGN IN WITH FACEBOOK",
                icon: () => <Utilities.Icons.Zocial name='facebook' size={20} color={theme.colors.white} style={{ marginRight: 8, marginTop: 3 }} />,
                error: "Please enter proper email address.",
                key: 'facebook',
                type: "button_gradient",
                secure: false,
                gadients: ["#3b5998", "#1977F3"],
                fontColor: theme.colors.white
            },
            {
                placeHolder: "SIGN IN WITH GOOGLE",
                icon: () => <Utilities.Icons.Zocial name='google' size={20} color={theme.colors.white} style={{ marginRight: 8, marginTop: 3 }} />,
                error: "Please enter proper email address.",
                key: 'google',
                type: "button_gradient",
                secure: false,
                gadients: ["#EA4235", "#EA4235"],
                fontColor: theme.colors.white
            },
            {
                placeHolder: "SIGN IN WITH APPLE",
                icon: () => <Utilities.Icons.AntDesign name='apple1' size={20} color={theme.colors.white} style={{ marginRight: 8, marginTop: 3 }} />,
                error: "Please enter proper email address.",
                key: 'apple',
                type: "button_gradient",
                secure: false,
                gadients: ["#000000", "#000000"],
                fontColor: theme.colors.white
            },
        ],
    },
    "LOGIN": {
        title: "LOGIN",
        key: 'login',
        actionText: "LOGIN",
        fields: [
            {
                placeHolder: "dummy@gmail.com",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'email',
                type: "email",
                secure: false,
            },
            {
                placeHolder: "●●●●●●●●",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'password',
                type: "password",
                secure: true,
            }
        ],
        secondaryActions: [
            {
                title: "Forgot Password?",
                key: "forgetpass",
            }
        ],
        bottomActions: [
            {
                title: "Don't have an account?",
                action: "Sign Up",
                key: "signup",
            }
        ]
    },
    "FORGETPASS": {
        title: "FORGET PASSWORD",
        key: 'forget',
        actionText: "SEND",
        fields: [
            {
                placeHolder: "Enter Email or Phone Number",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'email',
                type: "email",
                secure: false,
            },
        ],
        secondaryActions: [
            // {
            //     title: "Forgot Password?",
            //     key: "forgetpass",
            // }
        ],
        bottomActions: [
            {
                title: "Don't have an account?",
                action: "Sign Up",
                key: "signup",
            }
        ]
    },
    "VERIFICATION": {
        title: "VERIFICATION",
        key: 'forget',
        actionText: "RESEND",
        fields: [
            {
                placeHolder: "0",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'otp',
                type: "otp",
                secure: false,
            },
        ]
    },
    "RESETPASSWORD": {
        title: "RESET PASSWORD",
        key: 'reset_password',
        actionText: "LOGIN",
        fields: [
            {
                placeHolder: "●●●●●●●●",
                floating: "New Password",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'password',
                type: "password",
                secure: true,
            },
            {
                placeHolder: "●●●●●●●●",
                floating: "Reenter New Password",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'repeat_password',
                type: "password",
                secure: true,
            },
        ],
    },
    "VIEWPROFILE": {
        title: " ",
        key: 'view_profile',
        actionText: "NONE",
        fields: [
            {
                placeHolder: "johnsmith@example.com",
                floating: "Email",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'password',
                type: "password",
                secure: false,
                disabled: true,
                backgroundColor: theme.colors.lightgray,
                borderColor: theme.colors.lightgray,
                multiline: false
            },
            {
                placeHolder: "lorem ipsum dolor sit amet, consecteture.",
                floating: "Bio",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'repeat_password',
                type: "password",
                secure: false,
                disabled: true,
                backgroundColor: theme.colors.lightgray,
                borderColor: theme.colors.lightgray,
                multiline: true,
                borderRadius: 30
            },
        ],
    },
    "SIGNUP": {
        title: "CREATE NEW ACCOUNT",
        key: 'signup',
        actionText: "SIGN UP",
        fields: [
            {
                placeHolder: "John Smith",
                floating: "User Name",
                icon: () => <Utilities.Icons.FontAwesome name='user' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter your full name.",
                key: 'name',
                type: "string",
                secure: false,
            },
            {
                placeHolder: "dummy@gmail.com",
                floating: "Email",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'email',
                type: "email",
                secure: false,
            },
            {
                placeHolder: "●●●●●●●●",
                floating: "Password",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'password',
                type: "password",
                secure: true,
            },
            {
                placeHolder: "●●●●●●●●",
                floating: "Repeat Password",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'repeat_password',
                type: "password",
                secure: true,
            },
            {
                placeHolder: "123 - 123 - 1234",
                floating: "Phone Number",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'phone',
                type: "phone",
                secure: false,
                masked: true,
                mask: "999 - 999 - 9999"
            },
            {
                placeHolder: "123",
                floating: "Current Weight",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'weight',
                type: "string",
                secure: false,
                masked: true,
                mask: "999"

            },
            {
                placeHolder: "123",
                floating: "Desired Weight",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'desired_weight',
                type: "string",
                secure: false,
                masked: true,
                mask: "999"

            },
            {
                placeHolder: "123",
                floating: "Age",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'age',
                type: "string",
                secure: false,
                masked: true,
                mask: "999"

            }
        ],
        secondaryActions: [
            // {
            //     title: "Forgot Password?",
            //     key: "forgetpass",
            // }
        ],
        // bottomActions: [
        //     {
        //         title: "Don't have an account?",
        //         action: "Sign Up",
        //         key: "signup",
        //     }
        // ]
    },
    "EDITPROFILE": {
        title: "CREATE NEW ACCOUNT",
        key: 'edit_profile',
        actionText: "SAVE CHANGES",
        fields: [
            {
                placeHolder: "John Smith",
                floating: "User Name",
                icon: () => <Utilities.Icons.FontAwesome name='user' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter your full name.",
                key: 'name',
                type: "string",
                secure: false,
            },
            {
                placeHolder: "dummy@gmail.com",
                floating: "Email",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'email',
                type: "email",
                secure: false,
            },
            {
                placeHolder: "San Franscisco, CA",
                floating: "Location",
                icon: () => <Utilities.Icons.Zocial name='email' size={20} color={theme.colors.borderorangelight} />,
                error: "Please enter proper email address.",
                key: 'location',
                type: "email",
                secure: false,
            },
            {
                placeHolder: "●●●●●●●●",
                floating: "Password",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'password',
                type: "password",
                secure: true,
            },
            {
                placeHolder: "123 - 123 - 1234",
                floating: "Phone Number",
                icon: () => <Utilities.Icons.Fontisto name='locked' size={20} color={theme.colors.borderorangelight} />,
                error: "Password must be atleast 8 characters long, including uppercase and number.",
                key: 'phone',
                type: "phone",
                secure: false,
                masked: true,
                mask: "999 - 999 - 9999"
            },
        ],
    }
}