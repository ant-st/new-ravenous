import React from "react";
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


class SearchBar extends React.Component {
    renderSortByOption = () => {
        return Object.keys(sortByOptions).map((currentOption) => {
            let sortByOptionValue = sortByOptions[currentOption];
            return <li key={sortByOptionValue}>{currentOption}</li>
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