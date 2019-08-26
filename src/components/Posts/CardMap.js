import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from './Card'
import { getAllPosts } from '../../ducks/postReducer';
import './News.css'


// this component maps over ./post which which are the posts that are apart of the specific server
// the specific server id if from props.match.params that are passed down from homepage
class PostsMap extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            console.log('what in the butt', this.props.posts)
            this.setState({
                posts: this.props.posts.posts
            }, () => {
                console.log('this our state', this.state.posts)
            })
        }
    }
    componentDidMount = () => {
        this.props.getAllPosts()
        this.setState({ posts: this.props.posts.posts })
    }


    render() {
        console.log('props cardsmap', this.props)
        let posts = 'loading'
        console.log('weare looking here', posts);
        if (this.props.posts.posts)
            return (
                <section className="cards-container">
                    {posts = this.props.posts.posts.map(posts => {
                        return <Cards posts={posts} key={posts.news_post_id} post={this.props.posts.posts} />;
                    })}
                </section>
            );
        return (
            <div>{posts}</div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(
    mapStateToProps,
    { getAllPosts }
)(PostsMap);