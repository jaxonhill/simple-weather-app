import React from 'react'

const SearchBar = () => {
    return (
        <form className="bg-white w-2/5 p-3 flex items-center gap-3 rounded-2xl shadow">
            <label htmlFor="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#4B5563" stroke-width="2" />
                    <path d="M20 20L17 17" stroke="#4B5563" stroke-width="2" stroke-linecap="round" />
                </svg>
            </label>
            <input className="w-full text-gray-800 focus:outline-0 placeholder:text-gray-400" id="search" type="text" placeholder="Search a city..." autoComplete="off" autoFocus />
        </form>
    )
}

export default SearchBar