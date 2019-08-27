import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from './Card'
import { getAllPosts, deletePost } from '../../ducks/postReducer';
import './News.css'


// this component maps over ./post which which are the posts that are apart of the specific server
// the specific server id if from props.match.params that are passed down from homepage
class PostsMap extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],

        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                posts: this.props.posts.posts
            }, () => {
            })
        }
    }

    componentDidMount = () => {
        this.props.getAllPosts()
        this.setState({ posts: this.props.posts.posts })
    }

    removePost = (userId, news_post_id) => {
        console.log(userId, news_post_id)
        this.props.deletePost(userId, news_post_id)
        this.componentDidUpdate()

    }

    render() {
        console.log('props cardsmap', this.props)
        let posts = 'loading'
        console.log('weare looking here', posts);
        if (this.props.posts.posts)
            return (
                <section className="cards-container">
                    {posts = this.props.posts.posts.map(posts => {
                        return <Cards posts={posts} key={`${this.props.posts.posts.news_post_id}-post`} post={this.props.posts.posts} removePost={this.removePost} />;
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
    { getAllPosts, deletePost }
)(PostsMap);