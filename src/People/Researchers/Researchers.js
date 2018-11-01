import React from 'react';
import './Researchers.css';
import ResearchersAPI from '../../API/Researchers.json';

const fullName = (firstName, lastName) => firstName + ' ' + lastName.toUpperCase();

const ResearchersBuilder = (ResearchersList) => {
    return (ResearchersList.map((researcher, index) => {return (
        <div className = '-researchers-item-wrapper col-md-6' key = {researcher.email}>
            <div className = '-researchers-inner-wrapper clearfix'>
                <img className = '-researcher-image' src = {process.env.PUBLIC_URL + '/img/people/' + researcher.imageName} alt = 'not found!'/>
                <div className = '-researcher-text'>
                    <p className = '-researcher-name'>{fullName(researcher.firstName, researcher.lastName)}</p>
                    <p className = '-researcher-rank'>{researcher.rank}</p>
                    <p className = '-researcher-email'>
                        <i className="-footer-icon fas fa-envelope"></i>
                        {researcher.email}
                    </p>
                    <a className = '-researcher-google-scholar' href = "" onClick = {(e) => goToGoogleScholar(e, researcher.googleScholar)}>
                        <i className = "-footer-icon ai ai-google-scholar-square "></i>
                        Google Scholar            
                    </a>
                </div>
            </div>
        </div>
    );}));
}

const goToGoogleScholar = (e, gs) => {
    e.preventDefault();
    gs? window.open(gs, '_blank'): null
}

const Researchers = () => {
    return (
        <div className = '-researchers-outer-wrapper container'>
            <div className = 'row'>
                {ResearchersBuilder(ResearchersAPI)}
            </div>
        </div>
    );

}

export default Researchers;

