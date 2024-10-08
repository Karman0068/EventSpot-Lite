import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";



function AuthenticationPanel() {
    return (

            <form className="box-border
          bg-slate-300  p-4 
            min-h-fit  w-full max-w-full sm:w-[30rem]     
            flex  flex-col  gap-2    
            justify-center  items-center">

                <Outlet/>
                
            </form>

    );
};

export default AuthenticationPanel;