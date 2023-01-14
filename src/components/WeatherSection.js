import React from 'react'

const sharedClasses = "bg-white rounded-2xl shadow flex justify-center items-center font-bold text-3xl text-gray-800"

const setEmoji = (weatherDescription) => {
    weatherDescription = weatherDescription.toLowerCase();
    switch (weatherDescription) {
        case "thunderstorm":
            return "⛈️";
        case "drizzle":
            return "🌧️";
        case "rain":
            return "🌧️";
        case "snow":
            return "❄️";
        case "atmosphere":
            return "🌫️";
        case "clear":
            return "☀️";
        case "clouds":
            return "⛅";
        default:
            return "☁️";
    }
}

const WeatherSection = ({ weatherData, status }) => {

    let temp;
    let weatherEmoji;

    switch (status) {
        case "loading":
            return (
                <p className="text-gray-800 font-bold text-5xl">Loading...</p>
            )
        case "error":
            return (
                <p className="text-gray-800 font-bold text-5xl">Something went wrong...</p>
            )
        case "done":
            temp = Math.round(weatherData.main.temp)
            weatherEmoji = setEmoji(weatherData.weather[0].main);

            return (
                <div className="grid w-2/5 h-60 gap-4 grid-cols-3 grid-rows-2">
                    <div className={`${sharedClasses} text-9xl row-span-full col-span-1`}>{weatherEmoji}</div>
                    <div className={`${sharedClasses} col-span-2`}>{weatherData.name}</div>
                    <div className={`${sharedClasses} col-span-1`}>{weatherData.weather[0].main}</div>
                    <div className={`${sharedClasses} col-span-1`}>{temp}° F</div>
                </div>
            )
    }

    // if (weatherData) {

    //     temp = Math.round(weatherData.main.temp)
    //     weatherEmoji = setEmoji(weatherData.weather[0].main);

    //     return (
    //         <div className="grid w-2/5 h-60 gap-4 grid-cols-3 grid-rows-2">
    //             <div className={`${sharedClasses} text-9xl row-span-full col-span-1`}>{weatherEmoji}</div>
    //             <div className={`${sharedClasses} col-span-2`}>{weatherData.name}</div>
    //             <div className={`${sharedClasses} col-span-1`}>{weatherData.weather[0].main}</div>
    //             <div className={`${sharedClasses} col-span-1`}>{temp}° F</div>
    //         </div>
    //     )
    // }
}

export default WeatherSection