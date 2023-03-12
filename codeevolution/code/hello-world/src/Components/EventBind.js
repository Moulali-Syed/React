import React from 'react';

class EventBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello There',
    };
  }

  clickHandler = () => {
    this.setState({ message: 'Welcome to Event Handling' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
