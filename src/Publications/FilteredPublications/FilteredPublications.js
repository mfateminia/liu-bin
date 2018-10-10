import React from 'react';
import Publications from '../Publications';
import './FilteredPublications.css';
import PublicationsAPI from '../../API/Publications.json';

class FilteredPublications extends React.Component {
    state = {
        filteredPublications: [...PublicationsAPI],

    };

    filterThem = () => {
        const textFilterValue = document.getElementById('-filtered-search-input-id').value;
        const yearFilterValue = document.getElementById('-filtered-search-year-id').value;
        const typeFilterValue = document.getElementById('-filtered-search-type-id').value;
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


        this.setState({
            filteredPublications: [...filteredResults]});
    }

    clearFilters = () => {
        document.getElementById("-filtered-search-form-id").reset();
    }

    render(){
        return (
            <div className = '-filtered-wrapper  container'>
                <div className = '-filtered-search-box-wrapper'>
                    <form id = '-filtered-search-form-id' className = '-filtered-search-box'>
                        <input id = '-filtered-search-input-id' className = '-filtered-search-input' type="text" placeholder = 'Search in publications' onChange = {this.filterThem}></input>
                        <select id = '-filtered-search-year-id' className = '-filtered-search-dropdown' onChange = {this.filterThem}>
                            <option value="all-years">All years</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                        <select id = '-filtered-search-type-id' className = '-filtered-search-dropdown' onChange = {this.filterThem}>
                            <option value="all-types">All types</option>
                            <option value="book-chapter">Books</option>
                            <option value="journal-article">Journals</option>
                            <option value="patents">Patents</option>
                        </select>
                        <button className = '-filtered-search-button' onClick = {this.clearFilters}>Clear</button>
                    </form>
                </div>

                <Publications toShow = {this.state.filteredPublications}/>
            </div>
        );
    } 
}

export default FilteredPublications;