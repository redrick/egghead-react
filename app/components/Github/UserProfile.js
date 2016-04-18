import React from 'react'

var UserProfile = React.createClass({

  render: function() {
    return (
      <div>
        <p> USER PROFILE FOR {this.props.username} </p>
        <h3>BIO</h3>
        <p>{this.props.bio.name}</p>
        <p>{this.props.bio.content}</p>
      </div>
    );
  }

});

module.exports = UserProfile;
