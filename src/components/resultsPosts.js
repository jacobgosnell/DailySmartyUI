import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from './post';


class ResultsPosts extends Component {

  renderPosts() {
    const posts = this.props.posts.map((post, index) => {
      return <Post type="results" key={index} {...post}/>
    })
  }

  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <div className="results-posts__posts">
            Results Go Here
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.resultsPosts
  }
}

export default connect(mapStateToProps)(ResultsPosts);