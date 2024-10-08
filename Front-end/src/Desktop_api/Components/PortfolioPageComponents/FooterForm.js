import React, { useState } from 'react';
import AddNewComponent from '../GeneralComponents/AddNewComponent';
import Edit_DeleteComponent from '../GeneralComponents/Edit_DeleteComponent';
import { SolidButton } from "../GeneralComponents/Button";

function FooterForm() {
    const [isEditable, setisEditable] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const list = [
        { id: 1, placeholder: 'Source of contact (ph.no., email, etc.)' },
        { id: 2, placeholder: 'Personal Message if any' },
        { id: 3, placeholder: 'Comment' },
        { id: 3, placeholder: 'Comment' },
        { id: 3, placeholder: 'Comment' },
        { id: 3, placeholder: 'Comment' },
    ];
    return (
        <form className="flex flex-col 
            justify-around items-center
            max-w-96 min-w-52 sm:min-w-72 md:min-w-96  m-2 
            ms-6 sm:ms-10 md:ms-16 lg:ms-24 xl:ms-32 2xl:ms-44"
            value={inputValue}
            onChange={handleInputChange}
        >

            {list.map((item) => (
                <div className="w-full relative ">
                    <input
                        type="text"
                        placeholder={`${item.placeholder}`}
                        className="w-full p-2 h-12 border-b-4 bg-transparent outline-none text-lime-400 placeholder-lime-400  border-lime-400  focus:text-xl focus:font-semibold  focus:shadow-input-focus  focus:shadow-pink-500 transition-all duration-150" />

                    {(isEditable &&
                        <Edit_DeleteComponent>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                        </Edit_DeleteComponent>
                    )}
                </div>
            ))}


            {(isEditable &&
                <div className='mt-4'>
                    <AddNewComponent >
                        <input className='text-xl' />
                        <input className='text-xl' />
                    </AddNewComponent>
                </div>
            )}


            <SolidButton type='submit' text="Send Message" thickness="2" divClassName="mt-4 "
                buttonClassName={`   ${inputValue ? 'hover:text-pink-400 active:text-pink-500 hover:text-opacity-65' : ' hover:text-white active:text-white cursor-not-allowed opacity-50'}`}
                disabled={!inputValue} // Disable button if inputValue is empty
            />

        </form>
    );
}

export default FooterForm;