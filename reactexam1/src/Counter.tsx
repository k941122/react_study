import React,{useState} from "react";

const Counter = () => {

    // console.log("카운터 호출");

    const [count,setCount] = useState(0);
    /**
     * useState(0)의 메서드인 useState는 배열의 비구조화 할당(역으로 배열의 값을 메서드에 할당하는 것)
     * 을 통해 배열의 0번째index = count, 1번째 index = setCount로 할당 받는다.
     * 
     * 0번째 index count는 상태의 값!(retrun에 표시된 값)
     * 1번째 index setCount 는 count(retrun에 표시 된 값)의 상태를 변화 시키는 상태 변화 함수!
     * 
     * 비구조화 할당을 받는 useState(0)에서 0은 초기값 이다!
     * 
     * 정리! 
     * 
     * useState 메서드를 React에서 불러오면 count 라는 현재 상태를 나타내는 값을
     * setCount라는 상태로 업데이트 시켜 변화 시킬수 있다.
     * 
     */

    const onIncrease = () => {
        setCount(count+1);
        /**
         * 기능을 넣고싶을 함수를 만들고 그 안에 
         * setCount(현재 상태(count)를 변화시킬 상태변화 함수의 식을 넣는다.)
         */
    };

    const onDecrease = () => {
        setCount(count-1);
    }

    const [count2,setCount2] = useState(0);

    const onIncrease2 = () => {
        setCount2(count2+1);
    };

    const onDecrease2 = () => {
        setCount2(count2-1);
    }

    /**
     * count setCount 같은 경우 const 로 선언되는 상수 이기 때문에
     * 이름이 중복되면 안된다. 
     * 
     * state 함수를 잘 이용하면 html 및 화면을 변화 시킬수 있는 
     * 동적인 js 코드를 짤수 있다.
     */

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
            
        </div>
    )
}
/**
 * js 에서는 해당 html에 동적기능을 넣고 싶을때
 * onclick = "inCrease()"형식으로 큰따옴표 + 함수이름 ()를 넣었다.
 * react에서는 onclick = {increase} 형식으로 중괄호 + 함수이름만 넣으면 된다.
 */

/**
 * component 는 자신이 가진 state(상태)가 변화하면 다시 리렌더를 한다.
 * 즉 상태가 변하면 위의 useState 메서드를 통해 제작한 inCrease,deCrease 함수를
 * 다시 호출한다.
 */
export default Counter;