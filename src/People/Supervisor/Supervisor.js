import React from 'react';
import supervisorDetails from '../../API/Supervisor';
import './Supervisor.css';

const Supervisor = () => {
    return (
        <div className = '-supervisor-outer-wrapper container clearfix'>
            <img className = '-supervisor-image' src = {process.env.PUBLIC_URL + '/img/people/Bin_liu.jpg'} alt = 'not found!'/>
            <div className = '-supervisor-text row'>
                <div className = '-supervisor-description col-md-7'>
                    <p className = '-supervisor-name'>{supervisorDetails.fullName}</p>
                    <p className = '-supervisor-rank'>{supervisorDetails.rank}</p>
                    <p className = '-supervisor-title'>{supervisorDetails.title}</p>
                    <button className = '-supervisor-button btn btn-primary'>Read more</button>
                </div>

                <div className = '-supervisor-contact col-md-5'>
                    <p className = '-supervisor-email'>
                        <i className="-footer-icon fas fa-envelope"></i>
                        {supervisorDetails.email}
                    </p>
                    <p className = '-supervisor-telephone'>
                        <i className="-footer-icon fas fa-phone"></i>
                        {supervisorDetails.telephone}
                    </p>
                    <p className = '-supervisor-fax'>
                        <i className="-footer-icon fas fa-fax"></i>
                        {supervisorDetails.fax}
                    </p>
                    <p className = '-supervisor-google-scholar'>
                        <i className = "-footer-icon ai ai-google-scholar-square "></i>
                        <a href = {supervisorDetails.googleScholar} target = '_blank'>
                        Google Scholar
                        </a>
                    </p>
                </div> 
            </div>
        </div>
    );
}

export default Supervisor;