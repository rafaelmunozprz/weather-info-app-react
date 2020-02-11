import React from 'react';
import WeatherTemperature from './weather-temperature';
import WeatherExtraInfo from './weather-extra-info';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from '../constants/weathers';

const WeatherData = () => (
    <div>        
        <WeatherTemperature temperature={20} weatherState={RAIN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;