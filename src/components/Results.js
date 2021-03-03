import React from "react"
import "./Results.css"

const Results = ({ip, region, city, postalCode, timeZone, isp}) => {


  return (
    <section id="results">
      <div className="container ui">
        <div className="row">
          <div className="col-lg-3 ip">
            <p>IP ADDRESS</p>
            <h4>{ip}</h4>
          </div>
          <div className="col-lg-3 location">
            <p>LOCATION</p>
            <h4>{`${city} ${region} ${postalCode}`}</h4>
          </div>
          <div className="col-lg-3 timezone">
            <p>TIMEZONE</p>
            <h4>{timeZone}</h4>
          </div>
          <div className="col-lg-3 isp">
            <p>ISP</p>
            <h4>{isp}</h4>
          </div>
        </div>
      </div>
    </section>


  )
}



export default Results
