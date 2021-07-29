import React, { Component } from "react";

class Counter extends Component {
  /*constructor(props) {
    super(props);

    // state 초기값 설정
    this.state = {
      number: 0,
      fixedNumber : 0
    };
  }*/

   // constructor 메서드 선언하지 않고도 state 초깃값 설정 가능
  state = {
    number : 0,
    fixedNumber : 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber} </h2>
        <button
          onClick={() => {
            //this.setState({ number: number + 1 }); // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            //this.setState({number : this.state.number + 1});
            
            // prevState는 기존상태
            this.setState(prevState => {
              return{
                number : prevState.number + 1
              };
            });

            this.setState(prevState => ({ // 위의 코드와 같은 기능 수행, 함수에서 바로 객체를 반환
              number : prevState.number + 1
            }));

            // this.setState가 끝난 후 특정 작업 실행
            this.setState(
              {
                number : number + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
            }
            );

          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
