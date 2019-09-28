import React, { Component } from 'react';

// Components
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentposts";

// Importing Redux
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
    
  }

  render() {
    return (
      <div className="home">
        <div>
          <Logo />
          <SearchBar page="home" onSubmit={(query) => this.handleFormSubmit(query)}/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
