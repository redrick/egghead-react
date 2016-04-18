import React from 'react'

var Repos = React.createClass({

  render: function() {
    return (
      <div>
      <p>REPOSS</p>
      <p>{this.props.repos}</p>
      </div>
    );
  }

});

module.exports = Repos;
