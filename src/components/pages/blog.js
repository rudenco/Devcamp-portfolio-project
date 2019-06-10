import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item"

export default class Blog extends Component {

    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            if(this.state.isLoading || 
                this.state.blogItems.length === this.state.totalCount
            ) {
                return;
            }
            if (window.innerHeight + parseInt(document.documentElement.scrollTop) === document.documentElement.offsetHeight -1) {
                console.log("Reached bottom of the page");
                this.getBlogItems();
            }
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
        console.log("current state = " , this.state.currentPage);

        axios.get(
            `https://viteok.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, 
            {withCredentials: true  }
            ).then(response => {
            console.log("getting",response.data);
            this.setState({
                blogItems: this.state.blogItems.concat(
                    response.data.portfolio_blogs
                ) ,
                totalCount:  response.data.meta.total_records,
                isLoading: false
            })
        }).catch(error => {
            console.log("getBlogItems error", error);
        })
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        });

        return (
            <div className="blog-container">
            <div className="content-container">
                {blogRecords}
            </div>
            {this.state.isLoading ? (
                <div className="content-loader">
                    <FontAwesomeIcon icon="spinner" spin />    
                </div>) : null
            }                
            </div>
        );
    }
}