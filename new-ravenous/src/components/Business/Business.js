import React from "react";
import './Business.css';


class Business extends React.Component {
    render () {
        return (
        <div className="Business">
            <div className="image-container">
                <img src={this.props.instance.imageSrc} alt=''/>
            </div>
            <h2>{this.props.instance.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{this.props.instance.address}</p>
                    <p>{this.props.instance.city}</p>
                    <p>{this.props.instance.state} {this.props.instance.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{this.props.instance.category}</h3>
                    <h3 className="rating">{this.props.instance.rating} stars}</h3>
                    <p>{this.props.instance.reviewCount} reviews</p>
                </div>
            </div>
        </div>)
    }
}

export default Business;