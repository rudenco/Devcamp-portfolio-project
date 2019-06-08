import React, { Component } from "react";

import PortfolioContainer from "../portfolio/portfolio-container"

export default class Home extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <PortfolioContainer />
            </div>
        );
    }
}