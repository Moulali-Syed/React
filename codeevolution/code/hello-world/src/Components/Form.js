import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', comments: '', topic: 'react' };
  }

  inputHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  commentHandler = (e) => {
    this.setState({ comments: e.target.value });
  };

  handleTopicChange = (e) => {
    this.setState({ topic: e.target.value });
  };
  handleSubmit = (e) => {
    alert(
      `${this.state.username}  ${this.state.comments}  ${this.state.topic}`
    );
    e.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <label htmlFor="comment">Comments</label>
            <textarea
              id="comment"
              name="comment"
              value={comments}
              onChange={this.commentHandler}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select
              name="topic"
              value={topic}
              onChange={this.handleTopicChange}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;

/*
const Form = () => {
  const [state, setState] = useState('');

  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        id="username"
        name="username"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </form>
  );
};

export default Form;
*/
