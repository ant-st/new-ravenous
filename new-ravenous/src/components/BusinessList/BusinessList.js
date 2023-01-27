import React from "react";
import './BusinessList.css';
import Business from "../Business/Business";
import GMap from "../GMap/GMap";
import PropTypes from "prop-types";

class BusinessList extends React.Component {
    render() {
        return (

            <div>
                {(!this.props.homepage && this.props.list) ? <GMap businesess={this.props.list}/> : ''}
                <div className="BusinessList">
                { (this.props.list) ?
                    this.props.list.map((element) => {
                        return <Business instance={element} key={element.id}/>
                    }) : <h1>Invalid data!</h1>
                }
            </div>
            </div>
        )
    }
}

BusinessList.propTypes = {
    list: PropTypes.object.isRequired
}
export default BusinessList;
