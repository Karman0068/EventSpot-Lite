import React, { useState } from 'react';

function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className='mr-3 h-fit rounded-lg bg-white'>
            <input 
                className=' px-2 text-lg box-content max-w-48 sm:max-w-60 w-40 focus:w-60 rounded-l-lg border-4 border-white focus:border-blue-400 focus:outline-none transition-all ease-in-out duration-300' 
                placeholder='Search'
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {/* Only show the span if the input is not focused */}
            {!isFocused && <span className='border-[0.8px] border-slate-300'></span>}

            <button 
                type='button'
                className={`text-lg border-4 rounded-r-lg box-content border-white transition-all ease-in-out duration-200 ${inputValue ? 'hover:bg-slate-300 hover:border-slate-300 active:bg-slate-200' : 'cursor-not-allowed opacity-50'}`}
                disabled={!inputValue} // Disable button if inputValue is empty
            >
                &#128269;
            </button>
        </form>
    );
}

export default SearchBar;
