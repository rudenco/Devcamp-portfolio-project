import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from "axios";

export default class PortfolioContainer extends Component {

    constructor() {
        super();
        console.log("Portfolio container has rendered!");

        this.state = {
            pageTitle: "Welcome to Protfolio",
            isLoading: false,
            data: [
                // {title:"Quipt",category:"eCommerce", slug: "quip"},
                // {title:"Eventbride",category:"Scheduling", slug: "eventbride"},
                // {title:"Ministry Safe",category:"Enterprise", slug: "ministry-safe"},
                // {title:"SwingAway",category:"eCommerce", slug: "swingaway"}

            ]
        }

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);     
        // this.getPortfolioItems = this.getPortfolioItems.bind(this);   
    }

    getPortfolioItems() {
        axios.get('https://viteok.devcamp.space/portfolio/portfolio_items')
        .then(response => {
        //   console.log("responseData",response);
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
        });
      }


    portfolioItems() {
        return this.state.data.map(item => {
            return( <PortfolioItem 
                key={item.id}  
                item={item}
                />
                );
        })
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something Else"
    //     });
    // }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    componentDidMount() {
        this.getPortfolioItems()
    }; 
    render() {

        if(this.state.isLoading) {
            return <div>Loading ....</div>;
        }

        return(
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button className="btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        );
    }
}