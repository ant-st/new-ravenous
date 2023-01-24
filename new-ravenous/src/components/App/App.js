import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";
import './App.css';
import React from "react";
/*
let business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

let businesses = [];
for (let i=0;i<6;i++) businesses.push(business);*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={businesses: []};
        this.searchYelp=this.searchYelp.bind(this);
    }
    searchYelp = (term, location, sortBy) => {
        console.log("searching...");
        Yelp.search(term,location,sortBy).then(businesses => {
            console.log("Yay!");
            this.setState({businesses: businesses})
        });
    }

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <BusinessList list={this.state.businesses}/>
            </div>
  );}
}

export default App;
