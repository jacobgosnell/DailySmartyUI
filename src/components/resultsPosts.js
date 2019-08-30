import React, { Componet } from 'react';

import { connect } from 'react-redux';

class ResultsPosts extends Component {
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
    state
  }
}
export default connect(mapStateToProps)(ResultsPosts);