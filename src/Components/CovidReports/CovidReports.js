import React, { useEffect, useState } from 'react';
import CovidReport from '../CovidReport/CovidReport';
import logo from '../CovidReports/images/covid19.png'
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
            <img src={logo} alt="" />
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