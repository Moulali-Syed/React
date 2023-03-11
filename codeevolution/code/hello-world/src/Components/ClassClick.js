import React from 'react';

class ClassClick extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  handleClick() {
    console.log('button clicked');
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>ClickC</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>increase</button>
      </>
    );
  }
}

export default ClassClick;
