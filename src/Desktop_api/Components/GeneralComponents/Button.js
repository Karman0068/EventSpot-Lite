import React, { useState } from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
  } from "react-router-dom";



function SolidButton({
    type='button',
    text = 'empty',   
    color = 'light', 
    thickness='1',
    size='',
    buttonClassName='',
    divClassName='',
    target=''
}) {
    const thicknessVariants = {
        1: 'font-thin      text-base ',
        2: 'font-normal    text-lg   ',
        3: 'font-semibold  text-xl   ',
        4: 'font-bold      text-2xl  '
      }

    const colorVariants = {
        light: ' text-white bg-blue-950  active:text-blue-400    hover:text-blue-200',
        dark: 'text-white bg-gray-500  active:text-gray-400   hover:text-gray-300',
      }

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`rounded-2xl ${size} ${divClassName}`}>
            
        <button 
            type={`${type}`} 
            className={`box-border
                p-2 px-4
                rounded-2xl
                inline-block 
                min-h-fit  h-full
                min-w-fit  w-full

                ${isHovered?'shadow-lg shadow-black relative right-1 bottom-1 ':''}
                ${thicknessVariants[thickness]} 
                ${colorVariants[color]}
                ${buttonClassName}
            `} 

            onClick={() =>navigate(`${target}`)}
        >
            {text}
        </button>
        </div>
    );
}

function HollowButton({ 
    text = 'empty',  
    color = 'light', 
    thickness='1',
    size='',
    className='',
    target=''
}) {

    const thicknessVariants = {
        1: 'font-thin      text-base  border-[1px] ',
        2: 'font-normal    text-lg    border-2     ',
        3: 'font-semibold  text-xl    border-[3px] ',
        4: 'font-bold      text-2xl   border-4     '
      }

    const colorVariants = {
        light: 'border-blue-950 text-blue-950 bg-white   active:bg-blue-400  hover:bg-blue-200 ',
        dark: 'border-gray-500 text-gray-500 bg-white  active:bg-gray-400  hover:bg-gray-300 hover:text-gray-600 hover:border-gray-600',
      }

      const navigate = useNavigate();

    return (
        <button 
            type="button" 
            className={`box-border
                py-1 px-3
                rounded-2xl 
                inline-block 
                min-h-fit  
                min-w-fit 
                
                ${thicknessVariants[thickness]} 
                ${colorVariants[color]}
                ${size}
                ${className}
            `}

            onClick={() =>navigate(`${target}`)} 
        >
            {text}
        </button>
    );
}


export {SolidButton , HollowButton};