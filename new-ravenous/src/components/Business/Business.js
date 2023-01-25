import React from "react";
import './Business.css';


class Business extends React.Component {

    generateMapURL = () => {
        let endpointMap = "https://www.google.com/maps/search/?api=1&query=";
        endpointMap+=this.props.instance.name.replace(' ','+');
        endpointMap+='+'+this.props.instance.state+'+'+this.props.instance.zipCode;
        return endpointMap;
    }
    render () {
        return (
        <div className="Business">
            <div className="image-container">
                <a href={this.props.instance.url} target="_blank"><img src={this.props.instance.imageSrc} alt=''/></a>
            </div>
            <h2>{this.props.instance.name}</h2>
            <div className="Business-information">
                <a href={this.generateMapURL()} target="_blank"><div className="Business-address">
                    <p>{this.props.instance.address}</p>
                    <p>{this.props.instance.city}</p>
                    <p>{this.props.instance.state} {this.props.instance.zipCode}</p>
                </div></a>
                <div className="Business-reviews">
                    <h3>{this.props.instance.category}</h3>
                    <h3 className="rating">{this.props.instance.rating} stars</h3>
                    <p>{this.props.instance.reviewCount} reviews</p>
                </div>
            </div>
        </div>)
    }
}

export default Business;