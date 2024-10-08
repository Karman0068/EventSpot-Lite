
import React, { useState } from 'react';

const AddNewComponent = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>

            <button
                className="text-5xl p-[0.6rem] pt-0 font-semibold text-neutral-700 bg-gray-300 active:bg-gray-400 rounded-full aspect-square"
                onClick={() => setIsVisible(true)}>
                +
            </button>


            {isVisible && (
                <div className='fixed backdrop-blur-[2px] bg-opacity-40 inset-0  w-full flex items-center justify-center  z-30'>

                    <div className=" relative p-4 pt-10 w-fit h-fit  flex items-center justify-center bg-neutral-400 bg-opacity-70 rounded-2xl">

                        <button className='text-3xl font-semibold text-neutral-600 absolute right-2 top-1 ' onClick={() => setIsVisible(false)}>X</button>

                        <div className='flex flex-col items-center justify-center gap-2 text-base font-normal text-black'>

                            {children}

                        </div>

                    </div>

                </div>
            )}
        </>
    );
};

export default AddNewComponent;
