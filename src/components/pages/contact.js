import React, { Component } from "react";
import contactPagePicture from "../../../static/assets/images/contact/ContactImage.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="content-page-wrapper">
                <div 
                  className="left-column"
                  style={{
                      background: "url(" + contactPagePicture + ") no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }}>
                  
                </div>   
                <div className="right-column"> 
                  <div className="contact-bullet-points">
                      
                      <div className="bullet-point-group">
                          <div className="icon">
                              <FontAwesomeIcon icon="phone" />
                          </div>
                          <div className="text">
                            +373 60 513 742        
                          </div>
                      </div>

                      <div className="bullet-point-group">
                          <div className="icon">
                              <FontAwesomeIcon icon="envelope" />
                          </div>
                          <div className="text">
                            rudenco.victor@gmail.com       
                          </div>
                      </div>

                      <div className="bullet-point-group">
                          <div className="icon">
                              <FontAwesomeIcon icon="map-marked-alt" />
                          </div>
                          <div className="text">
                            Chisinau, MD        
                          </div>
                      </div>

                  </div>
               </div>  
            </div>
        );
    }
}