import { useState } from 'react';
import Edit_DeleteComponent from '../GeneralComponents/Edit_DeleteComponent';
import FooterForm from "./FooterForm";
import AddNewComponent from '../GeneralComponents/AddNewComponent';

function PorfolioFooter({className}){
    const [isEditable, setisEditable] = useState(true);
    return(
        <div 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                min-h-64 py-2
                flex flex-col lg:flex-row 
                
                 gap-28 lg:gap-40 xl:gap-56 2xl:gap-72 ">
                <FooterForm/>

                {/* Contact Information */}
                <div className="p-4 relative">

                    <div className="text-2xl font-bold text-gray-100 text-opacity-60">
                        <h3>Get In Touch</h3>
                    </div>

                    <div>
                        <p className="max-w-[40rem] text-lg font-medium text-gray-100 text-opacity-60">
                            I have make it dynamic only for owner
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-100 text-opacity-60">My Address</h3>
                    </div>


                    <div className="text-lg font-normal text-gray-100 text-opacity-60">
                        &#128205;&nbsp; Delhi,India
                    </div>

                    <div className="text-lg font-normal text-gray-100 text-opacity-60">
                        &#128222;&nbsp;999999999
                    </div>

                    <div className="text-lg font-normal text-gray-100 text-opacity-60">
                        &#128231;&nbsp;mee@gmail.com 
                    </div>


                    {(isEditable &&
                        <Edit_DeleteComponent>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                            <AddNewComponent>
                                <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                            </AddNewComponent>
                        </Edit_DeleteComponent>
                    )}


                </div>

            

        </div>
    );
}

export default PorfolioFooter;