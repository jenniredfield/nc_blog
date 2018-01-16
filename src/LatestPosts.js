import React from 'react';
import { Link } from 'react-router-dom';

class LatestPosts extends React.Component {

    state = {
        posts: [],
        page: null,
    }

    componentDidMount() {
        this.fetchPosts();
    }


    fetchPosts = () => {
        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/posts`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                this.setState({
                    page: res.page,
                    posts: res.posts,
                });

            })
            .catch(console.log);
    };

    fetchNextPost = (event) => {
        let currentPage = this.state.page;
        let nextPage = 0;
        if (event.target.value === 'next') nextPage = currentPage + 1;
        if (event.target.value === 'previous') nextPage = currentPage - 1;
        if (nextPage < 0) nextPage = 0;
        if (nextPage > 9) nextPage = 9;

        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/posts?page=${nextPage}`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                this.setState({
                    page: res.page,
                    posts: res.posts,
                });

            })
            .catch(console.log);


    }

    render() {

        return <div className="posts-wrapper">
                 <h2 className="home-title">Latest Posts</h2>

            {this.state.posts.map(function (post, i) {
                return (

                    <Link to={`/posts/${post.id}`} key={i}>
                        <div className="post-snippet">
                            <h2>{post.author}</h2>
                            <p className="description">{post.title}</p>
                        </div>
                    </Link>

                )

            })

            }
            <div className="buttons">
                <button type="submit" value="previous" onClick={this.fetchNextPost} disabled={this.state.page === 0 ? true : false}>Previous</button>
                <button type="submit" value="next" onClick={this.fetchNextPost} disabled={this.state.page === 9 ? true : false}>Next</button>
            </div>


        </div>

    }

}


export default LatestPosts;