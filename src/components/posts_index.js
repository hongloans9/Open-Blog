import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import './App.css';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <div>
                    <div class="post-preview" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h2 class="post-title">
                                {post.title}
                            </h2>
                            <h3 class="post-subtitle">
                                {post.categories}
                            </h3>
                        </Link>
                    </div>
                    <hr></hr>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);