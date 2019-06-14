import React, { Component } from "react";
//원하지 않으면 컴포넌트를 업데이트 하지 않는 예시

const MAX_PIZZAS = 20;

const eatPizaa = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return { pizzas: pizzas + 1 };
  } else {
    return null;
  }
  // return {
  //
  // };
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }

  _handleClick = () => {
    this.setState(eatPizaa);
  };
}

class App extends Component {
  render() {
    return <Controlled />;
  }
}

//다른파일이면 아래처럼 같은파일에 있다면 위에처럼 작성
export default App;
