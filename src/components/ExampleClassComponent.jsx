/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import ListOfThings from './ListOfThings';

class ExampleClassComponent extends Component {
    state = {
      user: 'John',
      items: [
        { id: 1, value: 'item one' },
        { id: 2, value: 'item two' },
        { id: 3, value: 'item three' },
      ],
    }

    someCoolFn() {
      alert('Hello!');
    }

    render() {
      return (
        <>
          <p>{this.state.user}, this is your list:</p>
          <ListOfThings todos={this.state.items} someCoolFn={this.someCoolFn} />
        </>
      );
    }
}

export default ExampleClassComponent;
