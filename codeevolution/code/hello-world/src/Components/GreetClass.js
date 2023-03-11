import React from 'react';

class GreetClass extends React.Component {
  //   constructor() {}

  render() {
    return (
      <h1>
        Hello Good Morning From Class Component {this.props.name}
        {this.props.children}
      </h1>
    );
  }
}

export default GreetClass;
