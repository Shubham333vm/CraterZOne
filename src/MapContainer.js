import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React from 'react'

export default function MapContainer() {
 
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
 
  return (
    <div>
     <LoadScript
       googleMapsApiKey='AIzaSyCrOU9USsIo-_9smUW18ErANDqtcPwhWQA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript> 
    </div>
  )
}