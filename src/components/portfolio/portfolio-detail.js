import React, { Component } from "react";
import axios from "axios";

// banner_image_url: "https://devcamp-space.s3.amazonaws.com/6rPfUwxgpTf7TyzZM2v81E8y?response-content-disposition=inline%3B%20filename%3D%22dashtrack.jpg%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20190629%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190629T055317Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2693280d5e33d422d5682c2bb43c998ff74a35660f7884a73cd1c0d9222aa86f"
// category: "Scheduling"
// column_names_merged_with_images: Array(9)
// 0: "id"
// 1: "name"
// 2: "description"
// 3: "url"
// 4: "category"
// 5: "position"
// 6: "thumb_image"
// 7: "banner_image"
// 8: "logo"
// length: 9
// __proto__: Array(0)
// description: "What you track impro..."
// id: 2824
// logo_url: "https://devcamp-space.s3.amazonaws.com/vD5UXKGzY6qmqUGhSpeiASAc?response-content-disposition=inline%3B%20filename%3D%22dashtrack.png%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20190629%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190629T055317Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=be53ff47c0acbdfaa908d2c7d621cf9a805f645192667d83bbe9dab044d082fe"
// name: "DashTrack"
// position: 3
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/5CKymZ7tTWPkGso5ctqDiUGn?response-content-disposition=inline%3B%20filename%3D%22dashtrack.jpg%22%3B%20filename%2A%3DUTF-8%27%27dashtrack.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20190629%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190629T055317Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=58c992c3bd6bb18c762edb3a3b779849b28775d00b09f48c0890a266e156d85a"
// url: "https://dashtrack.com"

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state ={
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios.get(`https://viteok.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        {withCredentials: true})
        .then(response => {
            console.log("Response Object: " , response);
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        })
        .catch(error => {
            console.log("getportfolioitem error" , error);
        })
    }

    render() {

        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        const logoStyles = {
            width: "150px"
        }
        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} style={logoStyles}/>
                </div>

                <div className="portfolio-detail-description-wrapper">
                    <div className="description">
                        {description}
                    </div>
                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                        Visit {name}
                    </a>
                </div>
            </div>
        );
    }
}