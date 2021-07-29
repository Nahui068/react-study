import React, { Component } from "react";
import PropTypes from "prop-types";

// 일반함수의 경우 자신이 종속된 객체를 this로 가리킴
// 화살표함수는 자신이 종속된 인스턴스를 가리킴
/*const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};*/

/*const MyComponent = (props) => {
  // 비구조화 할당
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
    </div>
  );
};*/

/*const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};*/

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// props 기본값 설정
MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  // name값은 무조건 문자열 형태로 전달
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

// 이 파일을 import하면, 위에서 선언한 MyComponent 클래스를 불러오도록 함
export default MyComponent;
