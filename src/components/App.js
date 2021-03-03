import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results"
import Map from "./Map"
import axios from "axios";

class App extends React.Component {
  state = {
    ip: "",
    city: "",
    region: "",
    postalCode: "",
    timeZone: "",
    isp: "",
    latitude: "",
    longtitude: ""
  }

  //On initial render of the app, I will make an API request for the user's location details
  //I will then update the states and then pass the states as props to the results and map component
  componentDidMount() {
    const onMount = async () => {
      const userDetails = await axios.get("https://geo.ipify.org/api/v1", {
          params: {
            apiKey: "at_QosYiQaRR8nXdU1zd7lgXP0fAXBxC"
          }
        });

      this.setState({
        ip: userDetails.data.ip,
        city: userDetails.data.location.city,
        region: userDetails.data.location.region,
        postalCode: userDetails.data.location.postalCode,
        timeZone: userDetails.data.location.timezone,
        isp: userDetails.data.isp,
        latitude: userDetails.data.location.lat,
        longtitude: userDetails.data.location.lng
      })
    }
    onMount();
  }



//On submission of the form, i will make an API request with axios
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://geo.ipify.org/api/v1", {
        params: {
          apiKey: "at_QosYiQaRR8nXdU1zd7lgXP0fAXBxC",
          ipAddress: term,
          domain: term 
        }
      });

    this.setState({
      ip: response.data.ip,
      city: response.data.location.city,
      region: response.data.location.region,
      postalCode: response.data.location.postalCode,
      timeZone: response.data.location.timezone,
      isp: response.data.isp,
      latitude: response.data.location.lat,
      longtitude: response.data.location.lng
    })

  }


  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <Results
        ip={this.state.ip}
        region={this.state.region}
        city={this.state.city}
        postalCode={this.state.postalCode}
        timeZone={this.state.timeZone}
        isp={this.state.isp}
        />
        <Map
        latitude={this.state.latitude}
        longtitude={this.state.longtitude}
        />
      </div>
    )


  }

}

export default App
