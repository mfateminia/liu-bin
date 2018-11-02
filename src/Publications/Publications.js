import React from 'react';
import { inject, observer } from 'mobx-react';
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import './Publications.css';
import PublicationsAPI from '../API/Publications.json';

const Publications = props => {
    ScrollToTop();
    const buildSearchBox = PublicationsAPI => {
        return (
            <div className = '-publications-search-box-wrapper'>
                <form id = '-publications-search-form-id' className = '-publications-search-box'>
                    <input id = '-publications-search-input-id' className = '-publications-search-input' type="text" placeholder = 'Search in publications' onChange = {applyFilter}></input>
                    <select id = '-publications-search-year-id' className = '-publications-search-dropdown' onChange = {applyFilter}>
                        {buildDropdown('year')}
                    </select>
                    <select id = '-publications-search-type-id' className = '-publications-search-dropdown' onChange = {applyFilter}>
                        {buildDropdown('type')}
                    </select>
                    <button className = '-publications-search-button' onClick = {clearFilters}>Clear</button>
                </form>
            </div>
        );
    }
    
    const buildDropdown = FilterField => {
        let arr = PublicationsAPI.map(item => item[FilterField]);
        arr = uniqueAndSort(arr);
        FilterField === 'year' ? arr.unshift('All years') : null;
        FilterField === 'type' ? arr.unshift('All Types') : null;
        return arr.map((item, index) => <option key = {index}>{item}</option>);        
    }
    
    const uniqueAndSort = arr => {
        if (arr.length === 0) return null;        
        arr = sortArray(arr);
        arr = removeDuplicates(arr);
        return arr;
    }
    
    const sortArray = arr => {
        arr = (isNaN(arr[0])? arr.sort() : arr.sort((a, b) => b - a));
        return arr;
    }
    
    const removeDuplicates = arr => {
        let uniqueSorted = [];
        for (let CurrentItem of arr) {
            PreviousItem !== CurrentItem ? uniqueSorted.push(CurrentItem) : null
            let PreviousItem = CurrentItem; 
            }
        return uniqueSorted;
    }
    
    const applyFilter = () => {
            const textFilterValue = document.getElementById('-publications-search-input-id').value;
            const yearFilterValue = document.getElementById('-publications-search-year-id').value;
            const typeFilterValue = document.getElementById('-publications-search-type-id').value;
    
            var filteredResults = [...PublicationsAPI];
            filteredResults = (textFilterValue ? filteredResults.filter(item => (item.title.toLowerCase().includes(textFilterValue.toLowerCase()))) : filteredResults)
            filteredResults = (yearFilterValue !== 'All years' ? filteredResults.filter(item => (item.year === yearFilterValue)) : filteredResults);
            filteredResults = (typeFilterValue !== 'All Types' ? filteredResults.filter(item => (item.type === typeFilterValue)) : filteredResults);
    
            props.store.applyFilters(filteredResults);
        }
    
    const clearFilters = () => {
        document.getElementById("-publications-search-form-id").reset();
    }

    const buildPublications = filteredPublications => {
        
        return filteredPublications.map((item, index) => {            
            let {id, year, type, containerTitle, authors, volume, page, doi, issn, title} = item;
            let link = 'https://dx.doi.org/' + doi;

            return (
                <a className = '-publications-item' href = {link} target = '_blank' key = {id}>                                
                    <p className = '-publications-title'>
                        {title}
                    </p> 
                    <p className = '-publications-authors'>
                        {buildAuthors(authors)}
                    </p>
                    <p className = '-publications-address'>
                        <span className = '-publications-journal'>{containerTitle}</span>, 
                        <span className = '-publications-year'> {year}</span>, 
                        <span className = '-publications-volume'>{volume}</span>, 
                        <span className = '-publications-page'> {page}</span>
                    </p>                                                                 
                </a> 
            );
        });
    }

    const buildAuthors = authors => {
        return (authors.map((author, index) => {
                if(author.firstName || author.lastName){
                    let delimiter = (index < (authors.length-1) ? ', ' : '');
                    return author.firstName + ' ' + author.lastName + delimiter;
                }
                return null;
            })
        );
    } 
        
    return (
        <div className = '-publications-wrapper  container'>
            {buildSearchBox(PublicationsAPI)}
            {buildPublications(props.store.filteredPublications)}
        </div>
    );
}

export default inject('store')(observer(Publications));