
import { SolidButton } from "../GeneralComponents/Button";

function LoginForm(){
    

    return(
        <>
            <input required
                className="p-2 px-5
                    w-full sm:w-[80%]
                    text-2xl
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300
                    "
                type="text"
                autoComplete="off"
                    placeholder="Username"
                    
                    >
            </input>

            <input required
                className="p-2 px-5
                    w-full sm:w-[80%]
                    text-2xl 
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                type="password"
                autoComplete="new-password"
                placeholder="Password"

                    >
            </input>

            <SolidButton type='submit' text="Submit" thickness="2" target="/home"/>
        </>
    );
}

export default LoginForm;