import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Apple',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Apple' });
    }, 2000);
  }
  render() {
    console.log('******* Parent Component**************');
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
