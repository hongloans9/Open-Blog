import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostbyID, deletePost } from '../actions';
import { Button } from 'react-bootstrap';

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
            <div>
                <Link to="/">Back To Home</Link>
                <Button bsStyle="info" onClick={this.onDeleteClick.bind(this)} >Delete</Button>
                <h3>{post.title}</h3>
                <h5>{post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPostbyID, deletePost })(PostsDetail);