
import AuthenticationPanel from "../Components/LoginPageComponents/AuthenticationPannel";
import FactTextBox from '../Components/LoginPageComponents/FactTextBox';
import KongImageBox from "../Components/LoginPageComponents/KongImageBox";

import TitleText from '../Components/LoginPageComponents/TitleText';


function LoginPageBody({ className }) {

  return (
    <div className={`box-border px-2 gap-3 flex flex-wrap justify-center items-center ${className}`}>

      {/* Image Box (Orange Border) */}
      <div
        className="box-border p-1 gap-1 flex-grow items-center text-center w-auto h-[80vh] mt-1 min-h-[30rem] hidden lg:flex border-2 rounded-md border-orange-400 flex-col justify-between"
        style={{ width: `calc(100vh - 48.5rem)`, height: `calc(100vh - 7.5rem)` }}
      >

        <KongImageBox />

        <TitleText />

      </div>

      {/* Login Box (Blue Border) */}
      <div
        className="box-border flex-grow lg:flex-grow-0 p-2 pb-10  min-h-fit w-screen lg:w-[33rem] xl:w-[43rem] border-blue-400 border-2 rounded-xl flex flex-col justify-center items-center"
      >
        <FactTextBox />
        <AuthenticationPanel />
      </div>


    </div>
  );
}

export default LoginPageBody;
