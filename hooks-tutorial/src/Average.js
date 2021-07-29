import React,{useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length; 
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    //const onChange = e => {
    //    setNumber(e.target.value);
    //};

    // useCallback : 첫 번째 파라미터는 생성하고 싶은 함수, 두번째는 배열(어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시)
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]); // 컴포넌트가 처음 렌더링될 때만 함수 생성, 비어있는 배열 넣으면 컴포넌트 렌더링 시 단 한번만 함수 생성

    //const onInsert = e => {
    //    const nextList = list.concat(parseInt(number));
    //    setList(nextList);
    //    setNumber('');
    //};

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number,list]); // number 혹은 list가 바뀌었을 때만 함수 생성, 인풋 내용이 바뀌거나 새로운 항목이 추가 될 때마다 함수 생성

    // 렌더링 과정에서 특정 값이 바뀔 때만 연산실행
    // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
    const avg = useMemo(()=>getAverage(list),[list]);

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/*<b>평균값:</b>{getAverage(list)}*/}
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};

export default Average;