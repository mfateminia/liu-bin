import React from 'react';
import { inject, observer } from 'mobx-react';
import './Publications.css';
import PublicationsAPI from '../API/Publications.json';

class FilteredPublications extends React.Component {

    buildSearchBox(PublicationsAPI){
        return (
            <div className = '-publications-search-box-wrapper'>
                <form id = '-publications-search-form-id' className = '-publications-search-box'>
                    <input id = '-publications-search-input-id' className = '-publications-search-input' type="text" placeholder = 'Search in publications' onChange = {this.filterThem}></input>
                    <select id = '-publications-search-year-id' className = '-publications-search-dropdown' onChange = {this.filterThem}>
                        {this.buildYearsFilter()}
                    </select>
                    <select id = '-publications-search-type-id' className = '-publications-search-dropdown' onChange = {this.filterThem}>
                        {this.buildTypesFilter()}
                    </select>
                    <button className = '-publications-search-button' onClick = {this.clearFilters}>Clear</button>
                </form>
            </div>
        );
    }

    buildYearsFilter(){
        let yearsArr = PublicationsAPI.map(item => item.year);
        yearsArr = this.uniqueSort(yearsArr);

        yearsArr.unshift('All years');
        return yearsArr.map((item, index) => <option key = {index}>{item}</option>);        
    }

    buildTypesFilter(){
        let typesArr = PublicationsAPI.map(item => item.type);
        typesArr = this.uniqueSort(typesArr);

        typesArr.unshift('All Types');
        return typesArr.map((item, index) => <option key = {index}>{item}</option>);
    }

    uniqueSort(arr){
        if (arr.length === 0) return null;

        //sort array
        isNaN(arr[0])? arr = arr.sort() : arr = arr.sort((a, b) => b - a)

        //remove duplicates
        let uniqueSorted = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i-1] !== arr[i]) {
            uniqueSorted.push(arr[i]);
          }
        }
        return uniqueSorted;
    }

    filterThem = () => {
        const textFilterValue = document.getElementById('-publications-search-input-id').value;
        const yearFilterValue = document.getElementById('-publications-search-year-id').value;
        const typeFilterValue = document.getElementById('-publications-search-type-id').value;
        var filteredResults = [...PublicationsAPI];

        if(textFilterValue){
            filteredResults = filteredResults.filter(item => (item.title.toLowerCase().includes(textFilterValue.toLowerCase())));
        } 

        if(yearFilterValue !== 'All years'){
            filteredResults = filteredResults.filter(item => (item.year === yearFilterValue));
        }

        if(typeFilterValue !== 'All Types'){
            filteredResults = filteredResults.filter(item => (item.type === typeFilterValue));
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