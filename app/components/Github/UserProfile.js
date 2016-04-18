import React from 'react'

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired,
  },
  render: function() {
    console.log(this.props.bio);
    return (
      <div>
        <p> USER PROFILE FOR {this.props.username} </p>
        <h3>BIO</h3>
      </div>
    );
  }

});

module.exports = UserProfile;
