import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type:TOGGLE_SWITCH});
const increase = difference => ({type:INCREASE, difference});
const decrease = () => ({type:DECREASE});

// 초깃값 설정
const initialState = {
    toggle : false,
    counter : 0
};

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action){
    // action.type에 따라 다른 작업을 처리
    switch(action.type){
        case TOGGLE_SWITCH :
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            };
        case INCREASE :
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE :
            return {
                ...state,
                counter : state.counter -1
            };
        default :
            return state;
    }
}
const store = createStore(reducer);

const render = () => { // 상태가 업데이트될 때마다 호출, 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경
    const state = store.getState(); // 현재 상태 불러옴
    console.log(state);
    // 토글처리
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }

    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

