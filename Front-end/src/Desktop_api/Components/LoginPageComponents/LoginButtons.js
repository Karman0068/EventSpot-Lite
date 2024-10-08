import {SolidButton,HollowButton}  from "../GeneralComponents/Button";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
  } from "react-router-dom";


function LoginButtons(){
    return(
        <>
        
            <HollowButton 
                text='Login'
                color="light"
                thickness="4"
                size='w-full max-w-80  sm:max-w-full' 
                target='login'/>

            <SolidButton 
                text='Create Account'
                color="light"
                thickness="4"
                size='w-full max-w-80  sm:max-w-full'
                target='signup1'/>
        </>
    );
};

export default LoginButtons;