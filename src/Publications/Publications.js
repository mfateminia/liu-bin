import React from 'react';
import { inject, observer } from 'mobx-react';
import './Publications.css';
import PublicationsAPI from '../API/Publications.json';

class FilteredPublications extends React.Component {

    buildSearchBox(PublicationsAPI){
        return (
            <div className = '-publications-search-box-wrapper'>
                <form id = '-publications-search-form-id' className = '-publications-search-box'>
                    <input id = '-publications-search-input-id' className = '-publications-search-input' type="text" placeholder = 'Search in publications' onChange = {this.applyFilter}></input>
                    <select id = '-publications-search-year-id' className = '-publications-search-dropdown' onChange = {this.applyFilter}>
                        {this.buildDropdown('year')}
                    </select>
                    <select id = '-publications-search-type-id' className = '-publications-search-dropdown' onChange = {this.applyFilter}>
                        {this.buildDropdown('type')}
                    </select>
                    <button className = '-publications-search-button' onClick = {this.clearFilters}>Clear</button>
                </form>
            </div>
        );
    }

    buildDropdown(FilterField){
        let arr = PublicationsAPI.map(item => item[FilterField]);
        arr = this.uniqueAndSort(arr);
        FilterField === 'year' ? arr.unshift('All years') : FilterField;
        FilterField === 'type' ? arr.unshift('All Types') : FilterField;
        return arr.map((item, index) => <option key = {index}>{item}</option>);        
    }

    uniqueAndSort(arr){
        if (arr.length === 0) return null;        
        arr = this.sortArray(arr);
        arr = this.removeDuplicates(arr);
        return arr;
    }

    sortArray(arr){
        arr = (isNaN(arr[0])? arr.sort() : arr.sort((a, b) => b - a));
        return arr;
    }

    removeDuplicates(arr){
        let uniqueSorted = [];
        for (let CurrentItem of arr) {
            PreviousItem !== CurrentItem ? uniqueSorted.push(CurrentItem) : null
            let PreviousItem = CurrentItem; 
          }
        return uniqueSorted;
    }

    applyFilter = () => {
        const textFilterValue = document.getElementById('-publications-search-input-id').value;
        const yearFilterValue = document.getElementById('-publications-search-year-id').value;
        const typeFilterValue = document.getElementById('-publications-search-type-id').value;

        var filteredResults = [...PublicationsAPI];
        filteredResults = (textFilterValue ? filteredResults.filter(item => (item.title.toLowerCase().includes(textFilterValue.toLowerCase()))) : filteredResults)
        filteredResults = (yearFilterValue !== 'All years' ? filteredResults.filter(item => (item.year === yearFilterValue)) : filteredResults);
        filteredResults = (typeFilterValue !== 'All Types' ? filteredResults.filter(item => (item.type === typeFilterValue)) : filteredResults);

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
                        <span className = '-publications-volume'>{item.volume || 'hahaha'}</span>, 
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
                return null;
            })
        );
    }

    render(){
        return (
            <div className = '-publications-wrapper  container'>
                {this.buildSearchBox(PublicationsAPI)}
                {this.buildPublications(this.props.store.filteredPublications)}
            </div>
        );
    } 
}

export default inject('store')(observer(FilteredPublications));