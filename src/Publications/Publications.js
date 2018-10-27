import React from 'react';
import { inject, observer } from 'mobx-react';
import './Publications.css';
import PublicationsAPI from '../API/Publications.json';

class FilteredPublications extends React.Component {

    filterThem = () => {
        const textFilterValue = document.getElementById('-publications-search-input-id').value;
        const yearFilterValue = document.getElementById('-publications-search-year-id').value;
        const typeFilterValue = document.getElementById('-publications-search-type-id').value;
        var filteredResults = [...PublicationsAPI];

        if(textFilterValue){
            filteredResults = filteredResults.filter(item => (item.title.toLowerCase().includes(textFilterValue.toLowerCase())));
        } 

        if(yearFilterValue != 'all-years'){
            filteredResults = filteredResults.filter(item => (item.year == yearFilterValue));
        }

        if(typeFilterValue != 'all-types'){
            filteredResults = filteredResults.filter(item => (item.type == typeFilterValue));
        }

        this.props.store.applyFilters(filteredResults);
    }

    clearFilters = () => {
        document.getElementById("-publications-search-form-id").reset();
    }

    buildPublications = (filteredPublications) => {
        return filteredPublications.map((item, index) => {
            var link = 'https://dx.doi.org/' + item.doi;
            return (
                <a className = '-publications-item' href = {link} target = '_blank' key = {item.doi}>                                
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

    buildAuthors = (authors) => {
        return ( authors.map((author, index) => {
                if(author.firstName || author.lastName){
                    return author.firstName+' '+author.lastName +', ';
                }
            })
        );
    }

    render(){
        return (
            <div className = '-publications-wrapper  container'>
                <div className = '-publications-search-box-wrapper'>
                    <form id = '-publications-search-form-id' className = '-publications-search-box'>
                        <input id = '-publications-search-input-id' className = '-publications-search-input' type="text" placeholder = 'Search in publications' onChange = {this.filterThem}></input>
                        <select id = '-publications-search-year-id' className = '-publications-search-dropdown' onChange = {this.filterThem}>
                            <option value="all-years">All years</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                        <select id = '-publications-search-type-id' className = '-publications-search-dropdown' onChange = {this.filterThem}>
                            <option value="all-types">All types</option>
                            <option value="book-chapter">Books</option>
                            <option value="journal-article">Journals</option>
                            <option value="patents">Patents</option>
                        </select>
                        <button className = '-publications-search-button' onClick = {this.clearFilters}>Clear</button>
                    </form>
                </div>

                {this.buildPublications(this.props.store.filteredPublications)}
            </div>
        );
    } 
}

export default inject('store')(observer(FilteredPublications));