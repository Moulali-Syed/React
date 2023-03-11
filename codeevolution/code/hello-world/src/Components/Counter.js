import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log('callback', this.state.count)
    );
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </>
    );
  }
}

export default Counter;
