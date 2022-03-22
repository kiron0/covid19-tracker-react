import React from 'react';
import './CovidReport.css'

const CovidReport = (props) => {
    // console.log(props.covid)
    const {Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date} = props.covid;
    return (
        <div className='report'>
            <h2>{Country}</h2>
            {/* <h4>{CountryCode}</h4> */}
            <p className='covid-info'>Date: <strong>{Date.slice(0, 10)}</strong></p>
            <p className='covid-info'>New Confirmed: <span className='deaths'>{NewConfirmed}</span></p>
            <p className='covid-info'>Total Confirmed: <span className='deaths'>{TotalConfirmed}</span></p>
            <p className='covid-info'>New Deaths: <span className='deaths'>{NewDeaths}</span></p>
            <p className='covid-info'>Total Deaths: <span className='deaths'>{TotalDeaths}</span></p>
            <p className='covid-info'>New Recovered: <span className='recovered'>{NewRecovered}</span></p>
            <p className='covid-info'>Total Recovered: <span className='recovered'>{TotalRecovered}</span></p>
        </div>
    );
};

export default CovidReport;