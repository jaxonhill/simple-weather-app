import React from 'react'
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchBar = ({ setWeatherData }) => {
    const [cityName, setCityName] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => setWeatherData(data));
        setCityName("");
    }

    return (
        <form onSubmit={(e) => handleSearchSubmit(e)} className="bg-white w-2/5 p-3 mb-24 flex items-center gap-3 rounded-2xl shadow">
            <label htmlFor="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#4B5563" strokeWidth="2" />
                    <path d="M20 20L17 17" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </label>
            <input value={cityName} onChange={(e) => setCityName(e.target.value)} className="w-full text-gray-800 focus:outline-0 placeholder:text-gray-400" id="search" type="text" placeholder="Search a city..." autoComplete="off" autoFocus />
        </form>
    )
}

export default SearchBar