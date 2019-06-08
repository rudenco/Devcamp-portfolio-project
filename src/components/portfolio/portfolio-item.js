import React , {Component} from "react";
import {Link} from "react-router-dom";

export default class PortfolioItem extends Component {
    // Data that's needed
    //  - background image
    // - logo
    // - description
    // - id
    
    constructor(props) {
        super();

        this.state = {
            portfolioItemClass: ""
        }
    }


    handleMouseEnter() {
        this.setState({portfolioItemClass: 'image-blur'});
    }

    handleMouseLeave() {
        this.setState({portfolioItemClass: ""});
    }

    render() {
        const { id, description, thumb_image_url, logo_url} = this.props.item;
        return(
            <div className="portfolio-item-wrapper" 
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >

            {/* <h1>{this.state.portfolioItemClass}</h1> */}

            <div
                className={"portfolio-img-background " + this.state.portfolioItemClass}
                style={{
                    backgroundImage: "url(" + thumb_image_url + ")"
                }}
            />

            <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} />
                </div>

                <div className="subtitle">{description}</div>
            </div>
            </div>
        );
    }
}