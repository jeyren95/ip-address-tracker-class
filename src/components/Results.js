import React from "react"
import "./Results.css"

class Results extends React.Component {

  render() {
    return (
      <div className="results">
        <div className="container ui">
          <div className="row">
            <div className="col-sm-3 ip">
              <p>IP ADDRESS</p>
              <h4>{this.props.ip}</h4>
            </div>
            <div className="col-sm-3 location">
              <p>LOCATION</p>
              <h4>{`${this.props.city} ${this.props.region} ${this.props.postalCode}`}</h4>
            </div>
            <div className="col-sm-3 timezone">
              <p>TIMEZONE</p>
              <h4>{this.props.timeZone}</h4>
            </div>
            <div className="col-sm-3 isp">
              <p>ISP</p>
              <h4>{this.props.isp}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }




}



export default Results
