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

    getPortfolioItems(filter = null) {
        axios.get('https://viteok.devcamp.space/portfolio/portfolio_items')
        .then(response => {
         if(filter) {
            this.setState({
                data: response.data.portfolio_items.filter(item => {
                    return item.category === filter;
                })
            })             
         } else {
            this.setState({
                data: response.data.portfolio_items
            })
         }
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

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    componentDidMount() {
        this.getPortfolioItems()
    }; 
    render() {

        if(this.state.isLoading) {
            return <div>Loading ....</div>;
        }

        return(
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>
                        eCommerce
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Education')}>
                        Education
                    </button>     
                    <button className="btn" onClick={() => this.handleFilter('Technology')}>
                        Technology
                    </button>                    
                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>
                        Scheduling
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>
                        Enterprise
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Social Media')}>
                        Social Media
                    </button>                    
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>
                        All
                    </button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}