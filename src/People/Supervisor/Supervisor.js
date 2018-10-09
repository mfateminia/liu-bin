import React from 'react';
import './Supervisor.css';
import liuBin from '../../img/bin_liu.jpg';

const supervisorDetails = {
    firstName: 'Bin',
    lastName: 'Liu',
    fullName: function() {return this.firstName + ' ' + this.lastName.toUpperCase();},    
    rank: 'Professor',
    title: 'Head of the Department of Chemical and Biomolecular Engineering, NUS',
    email: 'cheliub@nus.edu.sg',
    telephone: '+65 6516 8049',
    fax: '+65 6779 1936',
    address: 'National University of Singapore Department of Chemical and Biomolecular Engineering, 4 Engineering Drive 4, Blk E5 #02-17, Singapore 117585',
    googleScholar: 'https://scholar.google.com/citations?user=-vV92GoAAAAJ&hl=en'

};

const Supervisor = () => {
    return (
        <div className = '-supervisor-outer-wrapper container clearfix'>
            <img className = '-supervisor-image' src = {liuBin} alt = 'not found!'/>
            <div className = '-supervisor-text row'>
                <div className = '-supervisor-description col-sm-7'>
                    <p className = '-supervisor-name'>{supervisorDetails.fullName()}</p>
                    <p className = '-supervisor-rank'>{supervisorDetails.rank}</p>
                    <p className = '-supervisor-title'>{supervisorDetails.title}</p>
                    <button className = '-supervisor-button btn btn-primary'>Read more</button>
                </div>

                <div className = '-supervisor-contact col-sm-5'>
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