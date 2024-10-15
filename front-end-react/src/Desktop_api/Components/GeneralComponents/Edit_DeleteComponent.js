import React, { useState } from 'react';

function Edit_DeleteComponent({children}) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className='absolute top-0  left-0 rounded-xl  w-full h-full flex justify-center items-center gap-3 backdrop-blur-[2px] z-10'>
                <button
                    className="text-3xl p-[0.42rem] px-[0.62rem] font-semibold text-neutral-700 bg-gray-500 border-2 border-gray-700 bg-opacity-65 active:bg-gray-400 rounded-full aspect-square"
                    onClick={() => setIsVisible(true)}>
                    &#9998;
                </button>

                <button
                    className="text-3xl p-1 font-semibold text-neutral-700 bg-red-200 border-2 border-red-700 bg-opacity-70 active:bg-gray-400 rounded-full aspect-square"
                    onClick={() => { }}>
                    &#10060;
                </button>
            </div>

            {isVisible && (
                <div className='fixed backdrop-blur-[2px] bg-opacity-40 inset-0  w-full flex items-center justify-center  z-30'>

                    <div className=" relative p-4 pt-10 w-fit h-fit  flex items-center justify-center bg-neutral-400 bg-opacity-70 rounded-xl">

                        <button className='text-3xl font-semibold text-neutral-600 absolute right-2 top-1 ' onClick={() => setIsVisible(false)}>X</button>

                        <div className='flex flex-col items-center justify-center gap-2 text-base font-normal text-black'>

                            {children}

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default Edit_DeleteComponent