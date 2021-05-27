import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function map() {
  return (
      <MapContainer center={[20.634890, 96.565460]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[20.634890, 96.565460]}>
              <Popup>
                  Kalaw Heritage Hotel <br /> No 3 Quarter, University Road, Kalaw, Shan State, Myanmar
             </Popup>
          </Marker>
      </MapContainer>
  )
}
