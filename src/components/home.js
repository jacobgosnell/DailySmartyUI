import React, { Component } from 'react';

// Components
import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentposts";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
