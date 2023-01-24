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
    }

    getSortByClass = (selectedOption) => {
        return (selectedOption === this.state.sortBy) ? 'active' : '';
    }

    handleSortByChange = (selectedOption) => {
        this.setState({sortBy: selectedOption});
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
                    <input placeholder="Search Businesses"/>
                    <input placeholder="Where?"/>
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;