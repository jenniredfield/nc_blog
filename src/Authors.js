import React from 'react';

class Authors extends React.Component {

    state = {
        name: null,
        posts: [],
        page: null,
    }


    componentDidMount() {
        const { name } = this.props.match.params
        this.fetchPostsByAuthor(name);
    }

    componentWillReceiveProps(nextProps) {
        const oldName = this.props.match.params.name
        const newName = nextProps.match.params.name
        if (oldName !== newName) {
            this.fetchPostsByAuthor(newName);
        }
    }


    fetchPostsByAuthor = (name) => {
        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/authors/${name}`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                this.setState({
                    posts: res.posts,
                    name: name,
                    page: res.page,
                });

            })
            .catch(console.log);
    };

    fetchNextPost = (event) => {
        console.log(this.state.name)
        let currentPage = this.state.page;
        let nextPage = 0;
        if (event.target.value === 'next') nextPage = currentPage + 1;
        if (event.target.value === 'previous') nextPage = currentPage - 1;
        console.log(nextPage, 'nextPage')
        console.log(currentPage, 'currentPage')
        if (nextPage < 0) nextPage = 0;
        if (nextPage > 9) nextPage = 9;

        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/authors/${this.state.name}?page=${nextPage}`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    page: res.page,
                    posts: res.posts,
                });

            })
            .catch(console.log);


    }




    render() {
        return (
            <div className="postByAuthor-wrapper">
                <h2>{this.state.name}</h2>

                {this.state.posts.map((post, i) => {
                    return (
                        <div className="author-post-div" key={i}>
                            <h3>{post.title}</h3>
                            <p className="author-posts">{post.body}</p>
                        </div>
                    )
                })}
                <div className="buttons">
                    <button type="submit" value="previous" onClick={this.fetchNextPost} disabled={this.state.page === 0 ? true : false}>Previous</button>
                    <button type="submit" value="next" onClick={this.fetchNextPost} disabled={this.state.page === 9 ? true : false}>Next</button>
                </div>
            </div>


        );
    }
}

export default Authors;


