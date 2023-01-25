import React from "react";
import './BusinessList.css';
import Business from "../Business/Business";
import GMap from "../GMap/GMap";

class BusinessList extends React.Component {
    render() {
        return (
            <div>
                {(!this.props.homepage) ? <GMap/> : ''}
                <div className="BusinessList">
                {
                    this.props.list.map((element) => {
                        return <Business instance={element} key={element.id}/>
                    })
                }
            </div>
            </div>
        )
    }
}

export default BusinessList;
