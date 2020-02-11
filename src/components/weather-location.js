import React from 'react';
import Location from './location';
import WeatherData from './weather-data';
const WeatherLocation = () => (
    <div>
        <Location city={"Tepatitlán de Morelos, Jalisco"}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;