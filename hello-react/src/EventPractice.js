import React, {Component} from 'react';

class EventPractice extends Component{
    state = {
        username : '',
        message : ''
    }

    handleChange = (e) => {
        this.setState({
            //message : e.target.value
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        //alert(this.state.message);
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username:'',
            message:''
        });
    }

    handleKeyPress = (e) => { // 엔터
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
                />

                <input type="text" name="message" placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange = {this.handleChange}
                onKeyPress = {this.handleKeyPress}
    
               /* onChange={
                    (e) => { // e는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                             // SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보 참조 불가능
                             // 만약 비동기적으로 이벤트 객체 참조할 일이 있다면 e.persist() 함수 호출!!
                        //console.log(e);
                        //console.log(e.target.value);
                        this.setState({
                            message : e.target.value
                        })
                    }
                } */
               
                /*<button onClick = {
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message:'' // 공백으로 초기화
                        });
                    }
                }>확인</button>*/
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;