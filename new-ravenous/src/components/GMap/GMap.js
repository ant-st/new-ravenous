import React, { Component } from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const apiKey='AIzaSyDFDiy8O-BoM5HWOJ_R900f7B-5xRVHndQ';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 0,
    lng: 0
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

class GMap extends Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey={apiKey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={1}
                >
                    <Marker
                        onLoad={onLoad}
                        position={{lat: 37.772,
                            lng: -122.214}}/>
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default GMap;