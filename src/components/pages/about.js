import React, { Component } from "react";
import profilePicture from "../../../static/assets/images/bio/ImageOfMyself.png"
// import { prependOnceListener } from "cluster";

export default class About extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="content-page-wrapper">
                <div 
                  className="left-column"
                  style={{
                      background: "url(" + profilePicture + ") no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }}>
                  
                </div>   
                <div className="right-column"> 
                I am a software tester currently learning and advancing in the area of software development . 
                Devcamp course gave me the possibilitiy to feel confident with HTML , CSS, SCSS, REACT , Python, Git and other technologies used to work with in this sphere. 
                I am willing to become a full stack developer.   
               </div>  
            </div>
        );
    }
}