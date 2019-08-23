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
// change to people in the server
    componentDidMount() {
        this.props.getAllPosts()
        .then(res => {
            this.setState({ posts: res.value });
            })
    }

    render() {
        let { posts } = this.state
        return (
                <div className='cards-container'>{posts.map(posts => {
                return (
                    <Cards posts={posts} key={posts.id}  />
                )
            })}
            </div>
            
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