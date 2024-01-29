const Container = ({children}) => {
    return (
        <div style={{margin:20,padding:20,border:"1px solid gray"}}>
            {chldren}
        </div>
    )
};

export default Container;

/**
 * react에서 props는 다른 컴포넌트에서 컴포넌트로 값을 주고 받을수 
 * 있는 기능이다. 
 */