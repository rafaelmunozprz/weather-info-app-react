import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        Extra information<br></br>
        <span>
            {`Humidity: ${humidity} %`}
        </span>
        <br></br>
        <span>
            {`Wind: ${wind}`}
        </span>
    </div>
);

export default WeatherExtraInfo;