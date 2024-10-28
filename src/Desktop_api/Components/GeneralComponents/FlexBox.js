import React, { useState } from 'react';

function FlexBox({children}) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            
                <button className='absolute top-0  left-0 rounded-xl  w-full h-full'
                    onClick={() => setIsVisible(true)}>
                    
                </button>

            {isVisible && (
                <div className='fixed  backdrop-blur-sm bg-opacity-60 inset-0  w-full flex items-center justify-center  z-30'>

                    <div className=" relative p-4 pt-10 w-96 h-fit  flex items-center justify-center bg-neutral-400 bg-opacity-70 rounded-xl">

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

export default FlexBox;