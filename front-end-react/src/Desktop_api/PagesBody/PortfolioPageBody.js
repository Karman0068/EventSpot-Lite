import ProfilePictureSection from '../Components/GeneralComponents/ProfilePictureSection';
import PortfolioFooter from '../Components/PortfolioPageComponents/FooterPortfolio'
import ProgressBarBlock from '../Components/PortfolioPageComponents/ProgressBarSection';
import DottedPathBlock from '../Components/PortfolioPageComponents/RoadMap_dotted_Path_Section';
import GridBoxes from '../Components/GeneralComponents/GridBoxes';
import AddNewComponent from '../Components/GeneralComponents/AddNewComponent';
import Edit_DeleteComponent from '../Components/GeneralComponents/Edit_DeleteComponent';
function PortfolioPageBody({ className }) {
    return (
        <>
            <div
                className={`box-border  w-full
            ${className}`}
            >

                <div
                    className="p-2  
                        grid grid-flow-row ">

                    <ProfilePictureSection />

                    <div
                        className="
                            px-2 m-2 py-10 text-xl font-medium text-neutral-700">

                        Intro Text

                    </div>

                    <div
                        className="py-10 bg-orange-100
                            text-5xl font-bold text-orange-400
                            flex flex-col justify-center items-center">
                        <span className='relative'>
                            Skills
                            <Edit_DeleteComponent />
                        </span>
                        <ProgressBarBlock />
                    </div>


                    <div
                        className=" py-10
                            text-5xl font-bold text-orange-400
                            flex flex-col justify-center items-center">

                        <span className='relative'>
                            Work experience
                            <Edit_DeleteComponent />
                        </span>

                        <DottedPathBlock />
                    </div>


                    <div
                        className=" py-10 bg-orange-100
                            text-5xl font-bold text-orange-400
                            flex flex-col justify-center items-center">

                        <span className='relative'>
                            Education
                            <Edit_DeleteComponent />
                        </span>

                        <DottedPathBlock />
                    </div>


                    <div
                        className=" py-10
                            text-5xl font-bold text-orange-400
                            flex flex-col justify-center items-center">

                        <span className='relative'>
                            certificates
                            <Edit_DeleteComponent />
                        </span>

                        <DottedPathBlock />
                    </div>


                    <div
                        className=" py-10 
                            text-5xl font-bold text-orange-400
                            flex flex-col justify-center items-center">

                        <span className='relative'>
                            Pics
                            <Edit_DeleteComponent />
                        </span>

                        <GridBoxes />

                    </div>


                    <div
                        className=" py-10 
                            text-5xl font-bold text-orange-400
                            flex flex-col gap-10 justify-center items-center relative"
                    >
                        Add New Section
                        <AddNewComponent>
                            <input />
                        </AddNewComponent>
                    </div>


                </div>
            </div>


            <PortfolioFooter />
        </>
    );
}

export default PortfolioPageBody;