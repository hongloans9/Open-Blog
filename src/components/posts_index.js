import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id}>
                    {post.title}
                </li>
            );
        })
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>
                <div>
                    <Link to="/posts/new">
                    Add new post
                    </Link>
                </div>
                <h3>My Blogs</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);