import React from 'react'
import NotesList from './NotesList'

var Notes = React.createClass({

  render: function() {
    console.log()
    return (
      <div>
        <h3>NOTES for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }

});

module.exports = Notes;
