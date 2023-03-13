import React from 'react';
import DemoChild from './DemoChild';

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'apple',
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  greet = () => {
    alert(this.state.name);
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <DemoChild changehandle={this.greet} />
      </>
    );
  }
}
export default DemoComponent;
