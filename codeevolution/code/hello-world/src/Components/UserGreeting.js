import React from 'react';

class UserGreeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Apple</div>;
  }
}

export default UserGreeting;
