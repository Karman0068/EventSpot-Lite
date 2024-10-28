
import coverPic from '../../../Pictures/default images/Background_Landscape_Profile.png'
import DP from '../../../Pictures/default images/Portfolio_DP.png'

function ProfilePictureSection() {

    return (
        <div
            className="
                p-0 m-0 mb-16  relative
                h-fit w-full
                flex justify-center items-center  
                ">


            <div
                className='p-1 border-2 border-orange-200 rounded-xl aspect-video
                    max-w-[78rem] w-full relative
                    '>
                
                <img class="h-full w-full bg-gray-300 rounded-lg" src={coverPic} alt="Cover Piture" />
                <div
                    className='p-1 outline outline-4 outline-white border-2 border-orange-200 bg-white  rounded-full aspect-square min-w-48 w-[44%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:min-w-96 xl:w-[20%]
                    absolute -bottom-14 ml-4 z-[11] overflow-hidden
                    '>

                    <img class="h-full w-full rounded-full bg-gray-200" src={DP} alt="DP" />
                </div>

            </div>


        </div>
    );
}

export default ProfilePictureSection;