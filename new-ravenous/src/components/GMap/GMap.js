import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const apiKey='AIzaSyDFDiy8O-BoM5HWOJ_R900f7B-5xRVHndQ';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

class GMap extends Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey={apiKey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default GMap;