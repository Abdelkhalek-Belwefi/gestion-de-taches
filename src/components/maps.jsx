import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './maps.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.8869,
  lng: 9.5375,
};

const Maps = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={7}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        <Marker 
          position={center}
          title="Tunisia"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;