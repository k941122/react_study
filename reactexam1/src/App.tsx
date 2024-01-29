import React from 'react';
import './App.css';
import Myheader from './Myheader';
import Counter from './Counter';
import Container from './Container';




function App() {

  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  }
  return (
    <Container>
    <div>
      <Myheader/>
    <Counter {...counterProps}/>
    </div>
    </Container>
  );
}

/**
 * component들에게 전달되는 값들을 props 라고 부른다.
 * 객체를 부를때의 properties의 줄임말!
 */

export default App;

