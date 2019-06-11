import React, {Component} from 'react';
import axios from 'axios';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]",this.state.title);
        formData.append("portfolio_blog[blog_status]",this.state.blog_status);

        return formData;
    }

    handleSubmit(event) {
        axios.post(
            "https://viteok.devcamp.space/portfolio/portfolio_blogs", 
            this.buildForm(),
            {withCredentials: true}
         ).then(response => {
            this.props.handleSuccessfulFormSubmission(
                response.data.portfolio_blog
            );             

            this.setState({
                title: "",
                blog_status: ""
            })
         }).catch(error => {
             console.log("handleSubmit for blog error", error);
         });

        
        event.preventDefault();
        
    }    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="title"
                    placeholder="Blog Title"
                    value={this.state.title}
                    onChange={this.handleChange} 
                    type="text" 
                />
                <input 
                    name="blog_status"
                    placeholder="Blog Status"
                    value={this.state.blog_status}
                    onChange={this.handleChange} 
                    type="text" 
                />

                <button>Save</button>
            </form>
        );
    }
}