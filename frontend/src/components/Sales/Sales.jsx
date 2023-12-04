import React from "react";
import Navbar2 from "../Sidebar/Navbar2";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./columnCards.css";
import europe from "./europe.jpeg";

function Sales() {
  return (
    <div className="main-container">
      <div className="nav-main">
        <Navbar />
      </div>
      <div className="sec-nav">
        <Navbar2 />
        <div className="breadcrumbs">
          <h5> {`Sales > New Bookings`} </h5>
        </div>
      </div>
      <div class="main-content">
        <div class="column">
          <div class="card">
            <div className="image">
              <img src={europe} alt="" width="100%" height="300px" />
            </div>
            <div className="heading">
              <h1>European Tour</h1>
            </div>
            <div className="package-list mt-5">
              <ul>
                <li>Spain-Italy 8 Days</li>
                <li>European Elegance 11 Days</li>
                <li>European Elegance 11 Days</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div className="image">
              <img src={europe} alt="" width="100%" height="300px" />
            </div>
            <div className="heading">
              <h1>Asian Tour</h1>
            </div>
            <div className="package-list mt-5">
              <ul>
                <li>European Elegance 11 Days</li>
                <li>European Elegance 11 Days</li>
                <li>European Elegance 11 Days</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div className="image">
              <img src={europe} alt="" width="100%" height="300px" />
            </div>
            <div className="heading">
              <h1>Domestic Tour</h1>
            </div>
            <div className="package-list mt-5">
              <ul>
                <li>European Elegance 11 Days</li>
                <li>European Elegance 11 Days</li>
                <li>European Elegance 11 Days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
