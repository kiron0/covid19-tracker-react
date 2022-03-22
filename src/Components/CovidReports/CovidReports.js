import React, { useEffect, useState } from 'react';
import CovidReport from '../CovidReport/CovidReport';
import './CovidReports.css'

const CovidReports = () => {
    const [covidReports, setCovidReports] = useState([]);

    useEffect(() =>{
        const url = `https://api.covid19api.com/summary`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCovidReports(data.Countries))
    }, []);

    return (
        <div>
            <h1>Covid 19 Tracker</h1>
            <div className='report-container'>
            {
                covidReports.map(covidReport => <CovidReport
                covid={covidReport}
                key={covidReport.ID}
                ></CovidReport>)
            }
            </div>
        </div>
    );
};

export default CovidReports;