import React, { Component } from "react";

const BoundaryHOC = ProtectedComponect =>
  class BoundaryHOC extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponect />;
      }
    }
  };

class ErrorMaker extends Component {
  state = {
    friends: ["aa", "bb", "cc", "dd"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend} `);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Protals extends Component {
  render() {
    return <Message />;
  }
}

const PPortals = BoundaryHOC(Protals);

const Message = () => "Just touched it!";

const ErrorFallback = () => "sorry someting sent wrong";

class App extends Component {
  render() {
    return (
      <div>
        <PPortals />
        <br />
        <PErrorMaker />
      </div>
    );
  }
}

//다른파일이면 아래처럼 같은파일에 있다면 위에처럼 작성
export default BoundaryHOC(App);
