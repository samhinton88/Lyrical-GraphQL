import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    )
  }
}

// provide variables to the query before it is made
export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
