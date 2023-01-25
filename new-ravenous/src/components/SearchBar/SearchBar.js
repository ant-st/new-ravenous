import React from "react";
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.renderSortByOption=this.renderSortByOption.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }

    getSortByClass = (selectedOption) => {
        return (selectedOption === this.state.sortBy) ? 'active' : '';
    }

    handleSortByChange = (selectedOption) => {
        this.setState({sortBy: selectedOption});
    }

    handleTermChange = (e) => {
        const value = e.target.value;
        this.setState({term: value});
    }

    handleLocationChange = (e) => {
        const value = e.target.value;
        this.setState({location: value});
    }

    handleSearch = (e) => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        this.props.toggleHomepage();
        e.preventDefault()
    }

    renderSortByOption = () => {
        return Object.keys(sortByOptions).map((currentOption) => {
            let sortByOptionValue = sortByOptions[currentOption];
            return <li
                key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {currentOption}
            </li>
            // This will allow us to both bind to the current value of this (as we usually do in the constructor())
            // but also bind the current sortByOptionValue as the first argument to the method call, ensuring
            // the method is called with the appropriate value when clicked.
        })
    }

    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;