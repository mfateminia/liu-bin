import React from 'react';
import './Publications.css';
import PublicationsAPI from '../API/Publications.json';

class Publications extends React.Component{
    state = {
        filteredPublications: {...PublicationsAPI},
        classNames: '-publications-item'
    };

    buildAuthors = (authors) => {
        return ( authors.map((author, index) => {
            if(author.firstName || author.lastName){
                return author.firstName+' '+author.lastName +', ';
            }
        })
        );
    }

    buildPublications = () => {
        return PublicationsAPI.map((item, index) => {
            var link = 'https://dx.doi.org/' + item.doi;
             return (
                <a className = '-publications-item' href = {link} key = {item.doi}>                                
                    <p className = '-publications-title'>
                        {item.title}
                    </p> 
                    <p className = '-publications-authors'>
                        {this.buildAuthors(item.authors)}
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

    render(){
        return <div className = '-publications-wrapper container'>{this.buildPublications()}</div>;
    }
}

export default Publications;

