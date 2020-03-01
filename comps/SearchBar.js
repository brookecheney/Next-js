import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Pokemon"
            className="form-control mx-auto"
            style={{
              backgroundColor: 'white transparent',
              height: '1.2em',
              width: '35%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.5em'
            }}
          />
        </form>
      </div>
    );
  }
}
