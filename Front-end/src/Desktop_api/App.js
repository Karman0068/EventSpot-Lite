import Navbar from './Components/GeneralComponents/Navbar';
import Footer from './Components/GeneralComponents/Footer';



import LoginPageBody from './PagesBody/LoginPageBody';

import LoginButtons from "./Components/LoginPageComponents/LoginButtons";
import LoginForm from "./Components/LoginPageComponents/LoginForm";
import { SignupForm1, SignupForm2, SignupForm3 } from "./Components/LoginPageComponents/SignupForm";



import MyProjectsBody from './PagesBody/MyProjectsBody';

import ProfilePageBody from './PagesBody/ProfilePageBody';

import PortfolioPageBody from './PagesBody/PortfolioPageBody';


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
      min-h-screen  min-w-[29rem] 
      flex flex-col'>

        <Navbar />

        <div className='min-h-full w-full relative'
          style={{ minHeight : `calc(100vh - 7rem)` }}>
        <Routes>
          <Route exact path="/" element={<LoginPageBody className='flex-grow h-full' />}>
            <Route exact path="/" element={<LoginButtons />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/signup1" element={<SignupForm1 />} />
            <Route exact path="/signup2" element={<SignupForm2 />} />
            <Route exact path="/signup3" element={<SignupForm3 />} />
          </Route>

          <Route exact path="/MyProjects" element={<MyProjectsBody className='flex-grow h-full' />} />
          <Route exact path="/portfolio" element={<PortfolioPageBody className='flex-grow h-full ' />} />
          <Route exact path="/profile" element={<ProfilePageBody className='flex-grow h-full ' />} />
        </Routes>
        </div>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
