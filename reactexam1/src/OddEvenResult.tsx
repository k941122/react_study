const OddEvenResult = ({count}) => {
    console.log(count);
    return <div>{count % 2 === 0 ? "짝수":"홀수"}</div>
};

export default OddEvenResult;

/**
 * 
 * 위의 컴포넌트는 app.js 에서 동적인 데이터 state를 이용해서 데이터를 변하게 하는 것이다.
 * 
 * react 컴포넌트 의 특징!
 * 
 * react 컴포넌트는 본인이 관리하고, 본인이 가진 state가 바뀔 때마다 리렌더가 된다.
 * 
 * 나에게 (props를 받아오는 자식)오는 props가 바뀔 때마다 리랜더가 된다.
 * 
 * 위의 두경우가 아니더라도 부모 컴포넌트가 리랜더가 되면 자식 컴포넌트도 리랜더가 된다.
 */