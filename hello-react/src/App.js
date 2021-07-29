import React,{Component}  from "react";
import "./App.css";
//import IterationSample from "./IterationSample";
//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPractice2 from "./EventPractice2";
//import ValidationSample from "./ValidationSample";
//import ScrollBox from "./ScrollBox";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 함수형 컴포넌트 : state와 라이프사이클 API의 사용이 불가능 => Hooks라는 기능 도입되면서 해결

/*function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}*/

/*class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}*/

// const App = () => {
  // return <MyComponent name="React" />;
  //return <MyComponent />;
  /*return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  );*/ // 태그 사이의 값을 보여주는 proprs는 children

  //return <Counter />;
  //return <Say />;
  //return <EventPractice />;
  //return <EventPractice2 />;
  //return <ValidationSample />;
//};


// 랜덤 색상 생성
function getRandomColor(){
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  
  state = {
    color:'#000000'
  }

  handleClick = () => {
    this.setState({
      color:getRandomColor()
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color = {this.state.color}/>
        </ErrorBoundary>
      </div>

      /*<div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick = {() => this.ScrollBox.scrollToButton()}>
          맨 밑으로
        </button>
      </div>*/
      //<IterationSample />

    );
  }
}

export default App;
