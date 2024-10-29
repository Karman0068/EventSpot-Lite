import Navbar from './Components/GeneralComponents/Navbar';
import Footer from './Components/GeneralComponents/Footer';

import LoginPageBody from './PagesBody/LoginPageBody';

import LoginButtons from "./Components/LoginPageComponents/LoginButtons";
import LoginForm from "./Components/LoginPageComponents/LoginForm";
import { SignupProvider } from "./Components/LoginPageComponents/SignupForm";
import { SignupForm1, SignupForm2, SignupForm3 } from './Components/LoginPageComponents/SignupFormComponents';

import HomeBody from './PagesBody/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";



function App() {
  return (
    <Router>

      <div className=' box-border
      min-h-lvh min-w-72
      flex flex-col justify-between'>

        <Navbar />

        <div className='h-full w-full flex relative'>
          <Routes>
            <Route exact path="/" element={<LoginPageBody className='flex-grow h-full' />}>
              <Route exact index element={<LoginButtons />} />
              <Route exact path="/login" element={<LoginForm />} />
              <Route exact path="/signup" element={<SignupProvider />} >
                <Route exact path="step-1" element={<SignupForm1 />} />
                <Route exact path="step-2" element={<SignupForm2 />} />
                <Route exact path="step-3" element={<SignupForm3 />} />
              </Route>
            </Route>

            <Route exact path="/home" element={<HomeBody className='flex-grow h-full' />} />
            
            
          </Routes>
        </div>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
