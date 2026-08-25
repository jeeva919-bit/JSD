import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//var mark=[55,77,99,100,77]
//var stud={rno:1001,sname:"jeeva",mark:99,result:"pass",iseligible:true}
//var stud={
 // rno:1003
  //sname:"jeeva",
  //marks:[87,99,77]
  //result:null
//}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
