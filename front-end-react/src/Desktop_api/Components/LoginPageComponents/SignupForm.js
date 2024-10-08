import { HollowButton , SolidButton } from "../GeneralComponents/Button";

function SignupForm1(){
    return(
        <>
            <input 
                className="p-2 px-5
                    w-full sm:w-[80%]
                    text-2xl
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    autoComplete="off"
                    placeholder="Full Name">
            </input>

            <input 
                className="p-2 px-5
                    w-full sm:w-[80%] 
                    text-2xl 
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    autoComplete="off"
                    placeholder="Email ID">
            </input>

            <HollowButton type='submit' text="Next" thickness="2" target="/signup2"/>
        </>
    );
}    

function SignupForm2(){
    return(
        <>
            <input 
                className="p-2 px-5
                    w-full sm:w-[80%] 
                    text-2xl
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    autoComplete="off"
                    placeholder="User name">
            </input>

            <input 
                className="p-2 px-5
                    w-full sm:w-[80%] 
                    text-2xl 
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    autoComplete="off"
                    placeholder="Profession">
            </input>

            <HollowButton type='submit' text="Next" thickness="2" target="/signup3"/>
        </>
    );
}

function SignupForm3(){
    return(
        <>
            <input 
                className="p-2 px-5
                    w-full sm:w-[80%]
                    text-2xl 
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    type="password"
                    autoComplete="off"
                    placeholder="Password">
            </input>

            <input 
                className="p-2 px-5
                    w-full sm:w-[80%] 
                    text-2xl 
                    border-2 rounded-3xl  border-blue-900
                    outline-none  focus:w-full focus:shadow-black focus:shadow-md
                    duration-300"
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm-Password">
            </input>

            <SolidButton type='submit' text="Submit" thickness="2" target="/MyProjects"/>
        </>
    );
} 

export {SignupForm1,SignupForm2,SignupForm3};