import {SolidButton,HollowButton}  from "../GeneralComponents/Button";


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
                target='signup/step-1'/>
        </>
    );
};

export default LoginButtons;