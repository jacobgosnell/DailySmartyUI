import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {

  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">
            <div className="recent-posts_heading">Recent Posts</div>
            <ul className="recent-posts__posts">
              <li>Recent Post 0</li>
              <li>Recent Post 1</li>
              <li>Recent Post 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);