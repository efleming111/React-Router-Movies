import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.title} className="saved-movie"><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
        ))}
        <div className="home-button"><Link to="/">Home</Link></div>
      </div>
    );
  }
}
