import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Apple',
    };

    console.log('LifeCycle A Constructor');
  }
  static getDerivedStateFromProps(props, state) {
    //this has access to props and state , and has to return new state or null
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycleA shouldcomponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({ name: 'CodeEvolution' });
  };
  render() {
    console.log('LifeCycleA render');
    return (
      <>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
