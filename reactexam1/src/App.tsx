import React from 'react';
// import './App.css';
import Myheader from './Myheader';
import Myfooter from './Myfooter';



function App() {

  const style = {
    App: {
      backgroundColor:'black',
    },
    h2: {
      color:'white',
    },
    bold_text: {
      color: 'yellow',
    },
  };

  let name = "차은우";

  const num = 8;

  return (
    <div style={style.App}>
      <Myheader/>
        <h2 style={style.h2}>안녕 React!</h2>
        <b style={style.bold_text}>{num}은 :{num%2===0? "짝수":"홀수"}</b>
                                        {/* 조건부 렌더링 */}
      <Myfooter/>
    </div>
  );
}

export default App;

