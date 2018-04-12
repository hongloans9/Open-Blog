import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostbyID, deletePost } from '../actions';
import './App.css';


export class PostsDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPostbyID(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-preview">
                            <h2 className="post-title">{post.title}</h2>
                            <h3 className="post-subtitle">{post.categories}</h3>
                        </div>
                        <article>
                            <p>{post.content}</p>
                        </article>
                        <hr />
                        <button className="btn btn-primary" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPostbyID, deletePost })(PostsDetail);