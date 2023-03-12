import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Apple',
    };

    console.log('LifeCycle B Constructor');
  }
  static getDerivedStateFromProps(props, state) {
    //this has access to props and state , and has to return new state or null
    console.log('LifeCycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
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

  render() {
    console.log('LifeCycleB render');
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
