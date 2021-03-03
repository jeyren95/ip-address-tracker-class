import React from "react";
import "./Map.css";
import L from "leaflet";

class Map extends React.Component {

 componentDidMount() {
   this.map = L.map("map", {
     center: [this.props.latitude, this.props.longtitude],
     zoom: 16,
     layers: [
       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       }),
     ]
   });
   this.marker = L.marker([this.props.latitude, this.props.longtitude]).addTo(this.map)
 }

 componentDidUpdate() {
   this.map.panTo(new L.LatLng(this.props.latitude, this.props.longtitude));
   this.marker.setLatLng([this.props.latitude, this.props.longtitude]);
 }

  render() {
    return (
      <div id="map">
      </div>
    )
  }

}


export default Map;
