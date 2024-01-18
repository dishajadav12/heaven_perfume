import React from "react";
import "./Style.css";
import Delivery from "./Images/truckdelivery.png"
import Ecofriendly from "./Images/eco-friendly.png"
import Customization from "./Images/customization.png"


const Summary = () => {
  return (
    <div className="summary-container">
      <div className="row">
        <div className="col-4 summary-1">
          <div className="summary-slogan">
            Elevate Your Senses, <br /> Crafted in Heaven's Fragrant Embrace.
          </div>
          <div className="summary-desc">
            Celestial Alchemy in Every Drop. Crafted by skilled artisans, our
            perfumes blend the finest global ingredients in a harmonious
            dance.
          </div>
        </div>
        <div className="col-4 features">
          <div className="row f1">
            <div className="col-6">
              <img className="feature-icon" src={Delivery}alt="img " />
            </div>
            <div className="col-6">
              Global Elegance <br />
              worldwide delivery to 100+ countries
            </div>                 
          </div>
          <div className="row f1">
            <div className="col-6">
            <img className="feature-icon" src={Ecofriendly}alt="img" />

            </div>
            <div className="col-6">
            Signature Sustainability <br />
            eco-friendly scents that align withyour values.
            </div>
          </div>
          <div className="row f1">
            <div className="col-6">
            <img className="feature-icon" src={Customization}alt="img" />

            </div>
            <div className="col-6">
            Customizable Elegance <br />
            Personalize, define, embody: Heaven Perfume's sophistication.
            </div>
          </div>
          
        </div>
        <div className="col-4 summary-2">
            
          </div>
      </div>
    </div>
  );
};

export default Summary;
