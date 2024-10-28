import React, { useState } from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    const [inputValue, setInputValue] = useState(searchTerm || ''); // Use searchTerm as initial value
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(inputValue); // Pass the input value back to the parent for searching
    };

    const handleClear = () => {
        setInputValue('');
        setSearchTerm(''); // Clear the search in the parent component as well
    };

    return (
        <form 
            className='mr-3 px-10 w-full h-fit flex justify-center rounded-lg'
            onSubmit={handleSearch} // Handle form submission
        >
            <input 
                className='px-2 w-4/5 text-lg box-content rounded-l-lg border-4 border-blue-400 focus:outline-none transition-all ease-in-out duration-300' 
                placeholder='Search'
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <button 
                type='submit'
                className={`text-lg border-4 rounded-r-lg box-content border-slate-200 bg-slate-200 transition-all ease-in-out duration-200 ${inputValue ? 'hover:bg-neutral-300 hover:border-neutral-300 active:bg-slate-200' : 'cursor-not-allowed opacity-50'}`}
                disabled={!inputValue} // Disable button if inputValue is empty
            >
                &#128269; {/* Search icon */}
            </button>
            {inputValue && (
                <button 
                    type='button'
                    onClick={handleClear}
                    className='ml-2 text-2xl text-neutral-600 font-bold border-4 rounded-lg box-content border-slate-200 bg-slate-200 px-2 hover:bg-neutral-300 hover:border-neutral-300 active:bg-slate-200'
                >
                    X {/* Clear icon */}
                </button>
            )}
        </form>
    );
}

export default SearchBar;
