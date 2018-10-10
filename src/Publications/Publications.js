import React from 'react';
import './Publications.css';

const Publications = (props) => {

    const buildAuthors = (authors) => {
        return ( authors.map((author, index) => {
            if(author.firstName || author.lastName){
                return author.firstName+' '+author.lastName +', ';
            }
        })
        );
    }

    const buildPublications = () => {
        return props.toShow.map((item, index) => {
            var link = 'https://dx.doi.org/' + item.doi;
            return (
                <a className = '-publications-item' href = {link} target = '_blank' key = {item.doi}>                                
                    <p className = '-publications-title'>
                        {item.title}
                    </p> 
                    <p className = '-publications-authors'>
                        {buildAuthors(item.authors)}
                    </p>
                    <p className = '-publications-address'>
                        <span className = '-publications-journal'>{item.containerTitle}</span>, 
                        <span className = '-publications-year'> {item.year}</span>, 
                        <span className = '-publications-volume'> {item.volume}</span>, 
                        <span className = '-publications-page'> {item.page}</span>
                    </p>                                                                 
                </a> 
            );
        });
    }

    return (
        <div className = '-publications-wrapper'>
        {buildPublications()}
        </div>
    );
    
}

export default Publications;

