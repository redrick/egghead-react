import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import FireBase from 'firebase'

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'ME',
        content: 'Lorem ipsum'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function() {
    this.ref = new FireBase('https://crackling-inferno-3746.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
