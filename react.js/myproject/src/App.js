import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function App() {
  const[city,setCity]=useState("salem")
  const[result,setReuslt]=useState(null);
  const cityFun=(Event)=>{
    setCity(Event.target.value)
  }
  const show=async()=>{
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0a87d04504c5e59d7d110a9e31bd3c1`
    await axios.get(apiurl).then((response)=>{
      setReuslt(response.data)
      //console.log(result)
    }).catch((err)=>{
     // console.log(err.response.data)
    })

    //console.log(apiurl)
  }
  return (
    <div>
      <h1><center>weather report all over</center></h1>
      <h1><center>by using entering city name</center></h1>
      <h2><center>developed by S.Jeeva </center></h2>
      <hr size="10" color="green"></hr>
      <input type="text" value={city} onChange={(e)=>cityFun(e)} name="city" placeholer="enter the button"></input>
      <input type='button' value="find weather report" onClick={show}></input>
      <hr size="10 color="blue></hr>  
      {result!==null && result.cod===200 &&<><h2>Conurty & City:{result.sys.country}-{result.name}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Main report:{result.weather[0].main}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Description:{result.weather[0].description}</h2></>}
      {result!==null && result.cod===200 &&<><h2>wind speed:{result.wind.speed}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Temperature:{result.main.temp}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Humidity:{result.main.humidity}</h2></>}
      {result!==null && result.cod===200 &&<><h2>sea_level:{result.main.sea_level}</h2></>}
      {result!==null && result.cod===200 &&<><h2>cod-ord(lat lon):{result.coord.lat}:{result.coord.lon}</h2></>}
      {result!==null && result.cod===200 &&<font color='red' size='5'><b>result:{result.message}</b></font>}
    
    </div>
  )
}

export default App




/*import React from 'react'

function App() {
  let dis=()=>{
    document.getElementById("res")
    var a1=parseInt(document.getElementById("n1").value);
    var a2=parseInt(document.getElementById("n2").value);
    var a3=parseInt(document.getElementById("n3").value);
    var a4=parseInt(document.getElementById("n4").value);
    var a5=parseInt(document.getElementById("n5").value);
    document.getElementById("res").innerHTML=n1+n2+n3+n4+n5;  




  }
  return (
    <div>
      <input type="text" id="n1" placeholder='1'></input><br></br>
      <input type="text" id="n2" placeholder='2'></input><br></br>
      <input type="text" id="n3" placeholder='3'></input><br></br>
      <input type="text" id="n4" placeholder='4'></input><br></br>
      <input type="text" id="n5" placeholder='5'></input><br></br>

      <button onClick={dis}>find total</button>
      <div id="res"></div>

    </div>
  )
}

export default App





/*import React from 'react'

function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML="you are working currently:"+Event.target.type;
  }
  return (
    <div>
      <inpu type="text " onchange={dis}></inpu><br></br>
      <inpu type="number" onchange={dis}></inpu><br></br>
      <inpu type="password" onchange={dis}></inpu><br></br>
      <inpu type="radio" name="g" onchange={dis}></inpu>male
      <inpu type="radio" name="g" onchange={dis}></inpu>female<br></br>
      <inpu type="checkbox" onchange={dis}></inpu>c
      <inpu type="checkbox" onchange={dis}></inpu>c++
      <inpu type="checkbox" onchange={dis}></inpu>java
      <inpu type="checkbox" onchange={dis}></inpu>python<br></br>
      <div id="res"></div>

    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML=Event.target.id+"....typing"
  }
  return (
    <div>
      <input type="text" onChange={dis} id="textbox 1" placeholder='textbox 1'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 2" placeholder='textbox 2'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 3" placeholder='textbox 3'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 4" placeholder='textbox 4'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 5" placeholder='textbox 5'></input>
      <br></br>
      <div id="res"></div>
      
    </div>
  )
}

export default App





/*import React from 'react'

function App() {
  const dis=()=>{
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var=c=a+b;
    document.getElementById("res").innerHTML="total:"+c;
  }
  return (
    <div>
      <input type="text" id="t1" placeholder='enter no.1'></input>
      <input type="text" id="t2" placeholder='enter no.2'></input>
      <br></br>
      <input type="button" onClick={dis} value="find total"></input>
      <div id="res"></div>
    </div>
  )
}

export default App






/*import React from 'react'

function app() {
  const dis1=()=>{
    document.getElementById("res").innerHTML="cursor outside textbox";
    document.getElementById("t1").style.backgroundColor="pink";
  }
  const dis2=()=>{
    document.getElementById('res').innerHTML="cursor inside textbox";
    document.getElementById("t1").style.backgroundColor="lightgreen";
  }
  return (
    <div>
      <input type="text" id="t1" onblur={dis1} onFocus={dis2}
      placeholder='enter your text'></input>
      <div id="res"></div>
    </div>
  )
}

export default 





/*import React from 'react'

function App() {
  const dis = (event) => {
    var data = event.target.value
    document.getElementById("res").innerHTML=data+"... typing"

  }

  return (
    <div>
      <h1>react Events</h1>
      <input type="text" onchange=(dis) ></input>
  
        
      }
    </div>
  )
}

export default App






/*import React from 'react'

function App() {
  return (
    <div>
      <h1>react forms:</h1>
      <input type="text" id="t1" placeholder='enter mark 1'></input>
      <br></br>
      <input type="text" id="t2" placeholder='enter mark 2'></input>
      <br></br>
      <input type="text" id="t3" placeholder='enter mark 3'></input>
      <br></br>
      <input type="number" id="nm" placeholder='enter number'></input>
      <br></br>
      <input type="password" id="pw" placeholder='enter password'></input>
      <br></br>
      <label>select gender:</label>
      <input type="radio" id="g1" name="gen" ></input>male
      <input type="radio" id="g2" name="gen" ></input>female
      <input type="radio" id="g3" name="gen" ></input>others
      <br></br>
      <label>select courses:</label>
      <input type="checkbox" id="c1" ></input>c
      <input type="checkbox" id="c2" ></input>c++
      <input type="checkbox" id="c3" ></input>java
      <input type="checkbox" id="c3" ></input>none this above
      <br></br>
      <label>select colour:</label>
      <input type="color" id="cl" ></input>
      <br></br>
      <label>select date:</label>
      <input type="date" id="dt" ></input>
      <br></br>
      <label>select time:</label>
      <input type="time" id="tym" ></input>
      <br></br>




    </div>
  )
}

export default App





/*import React from 'react'

export default function App(props) {
  var arr=[]
    for(var k in props.data)
    {
      arr.push(k)
    }
    console.arr(props)
  return (
    <div>
      <h1>json </h1>
      <h2>roll number:{props.data.rno}</h2>
      <h2>name:{props.data.sname}</h2>
      <h2>mark 1:{props.data.marks[0]}</h2>
      <h2>mark 2:{props.data.marks[1]}</h2>
      <h2>mark 3:{props.data.marks[2]}</h2>
      <h3>result:{(props.data.marks[0]>34 && props.data.marks[1]>34 && props.data.marks[2]>34)?props.data.result="pass":props.data.result="fail"}</h3>
      <h1>=====================addition(smart way)===================</h1>
      {Array.map((item)=><><br></br>{item}---&gt; {props.data[item]}</>)}
      <h1>======================extra result (smart way)=========</h1>
      {Array.map((item)=><><br></br>{item}----&gt; {(item==="marks" && props.data[item].map((v,item)=><><br></br>mark:{index+1}---{v}</>)) || props.data.[item]</>)}


    </div>
  )
}



/*import React from 'react'

export default function App(props) {
  
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k)
  }

  return (
    <div>
      <h1>props using JSON data</h1>

      <h2>Roll No: {props.data.rno}</h2>
      <h2>Name: {props.data.sname}</h2>
      <h2>Mark: {props.data.mark}</h2>
      <h2>Result: {props.data.mark>=35?"pass":"fail"}</h2>
      <h2>is eligible to study: {props.data.iseligible?"eligible":"not eligible"}</h2>

      <br></br>
      <h2>============================================================</h2>
      {arr.map((v)=><h2>{v}----&gt; {props.data[v]}</h2>)}
      <h2>============================================================</h2>
      {arr.map((v)=><h2>{v}----&lt; {props.data[v]}</h2>)}
      <h2>======================extra Learner========================</h2>
      {arr.map((v)=><h2>{v}---- {(props.data[v]===true && "Eligible") || (props.data[v]===false && "Not Eligible") || props.data[v]}</h2>)}
      <h2>============================================================</h2>
      {arr.map((v)=><h2>{v}---- {props.data[v]===true?"Eligible":props.data[v]}</h2>)}
    </div>
  )
}



/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props: properties</h1>
      <h2>share data from one Component to another Component</h2>
      <h2>Your Name: {props.data}</h2>
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var stud={
    sno:1,
    sname:'Keerthivasan G',
    marks:{
      tamil:100,
      english:100,
      maths:101,
      science:99,
      social:100
    },
    rank:1,
    result:"PASS"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>Student number:{stud.sno}</h2>
      <h2>Student name:{stud.sname}</h2>
      <h2>Student tamil mark:{stud.marks["tamil"]}</h2>
      <h2>Student english mark:{stud.marks["english"]}</h2>
      <h2>Student maths mark:{stud.marks.maths}</h2>
      <h2>Student science mark:{stud.marks.science}</h2>
      <h2>Student social mark:{stud.marks["social"]}</h2>
      <h2>Student Rank:{stud.rank}</h2>
      <h2>Student Result:{stud.result}</h2>
    </div>
  )
}

export default App


/*import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:'Keerthivasan G',
    mark:100,
    rank:1,
    result:"pass"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>Student number:{stud.sno}</h2>
      <h2>Student name:{stud.sname}</h2>
      <h2>Student Mark:{stud.mark}</h2>
      <h2>Student Rank:{stud.rank}</h2>
      <h2>Student Result:{stud.result}</h2>
    </div>
  )
}

export default App



/*import React from 'react'
function App() {
  var arr=[11,22,33,44,55,66,77,88,99];
  var big=arr[0];
  return (
    <div>
      
      <h1>Array Demo</h1>
      {arr.map((item)=>item)}
      <br></br>
      {arr.map((item)=><>{item} </>)}
      {arr.map((item)=><><br></br>{item}</>)}

      <ol type='I'>
      {arr.map((v)=><li>{v}</li>)}
      <h1>biggest Number</h1>
      </ol>

      <div style={{display:"none"}}>
      {arr.map((v)=><>{big<v && <>{big=v}</>}</>)}
      </div>

      <h1>biggest number: {big}</h1>

    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var arr=[11,22,33,44,55,66]
  return (
    <div>
      <h1>Array</h1>
      <h2>array value index : 0 : {arr[0]}</h2>
      <h2>array value index : 1 : {arr[1]}</h2>
      <h2>array value index : 2 : {arr[2]}</h2>
      <h2>array value index : 3 : {arr[3]}</h2>
      <h2>array value index : 4 : {arr[4]}</h2>
      <h2>array value index : 5 : {arr[5]}</h2>
    </div>
  )
}

export default App


/*function App() {
  var avg=90;
  var res="fail";
  return (
    <div>
      <h1>4. Nested if</h1>
      <h1>Grade System:</h1>
      <h2>
        { 
        (res==="pass" && ((avg>=85 && "outstanding") || 
        (avg>=75 && "excellent")||
        (avg>=65 && "very good") || 
        (avg>=55 && "good") || 
        "fair")) || "no grade"
        }
      </h2>
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>Grade Calculation</h1>
      <h2>
        {mark} is {(mark>=85 && "outstanding") || (mark>=75 && "excellent")||(mark>=65 && "very good") || (mark>=55 && "good") || "fair"}
      </h2>
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var n=0;
  return (
    <div>
      <h1>3. if else if Statement or else if ladder</h1>
      <h2>{n} is {(n>0 && "+ve") || (n<0 && "-ve")|| "zero"}</h2>
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var y=2028;
  return (
    <div>
      <h1> Find given no. is leap year or not using if else</h1>
      <h2>Year :{y}</h2>
      <h2>{y} is {(y%4===0 && "Leap" ) || "Not leap"} Year</h2>
    </div>
  )
}
export default App

/*import React from 'react'

function App() {
  var n=47;
  return (
    <div>
      <h1> Find given no. is even or odd using if else</h1>
      <h2>Number:{n}</h2>
      <h2>{n} is {(n%2===0 && "Even" ) || "Odd"} Number</h2>
    </div>
  )
}

export default App


/*import React from 'react'

function App() {
  var n1=100;
  var n2=1001;
  return (
    <div>
      <h1>greatest among 2 numbers using if else</h1>

      <h2>number 1: {n1}</h2>
      <h2>number 2: {n2}</h2>
      <h2>{(n1>n2 && n1) || n2 } is biggest number</h2>
    </div>
  )
}
export default App


/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>2.if else Statement</h1>
      <h2>Mark : {mark}</h2>
      <h2>Result:</h2>
      <h2>{(mark>34 && "PASS") || "FAIL"}</h2>   
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>1. Simple If Statement</h1>
      <h2>Mark : {mark}</h2>
      <h2>Result:</h2>
      <h2>{mark>34 && "PASS"}</h2>
      <h2>{mark<=34 && "FAIL"}</h2>   
    </div>
  )
}

export default App


/*import './App.css'
import React from 'react'
import myimg from './img/Nature.jpg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}

export default App
/*import React from 'react'
import myimg from './img/Nature.jpg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}

export default App

/*var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
    <h1>Welcome to React Expression</h1>
    <h2>A value:{a}</h2>
    <h2>B value:{b}</h2>
    <h2>C value:{c}</h2>
    <h2>Total values:{a+b+c}</h2>
    </>
  )
}
export default App;

/*import React from "react";
class App extends React.Component
{
  render(){
    return(
      <>
        <h1>welcome to react js</h1>
        <h2>welcome to react js</h2>
        <h6>welcome to react js</h6>
      </>
    )
  }
}
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>Props using Array</h1><br></br>
      Tamil Mark: {props.data[0]}<br></br>
      English Mark: {props.data[1]}<br></br>
      Maths Mark: {props.data[2]}<br></br>
      Science Mark: {props.data[3]}<br></br>
      Social Science Mark: {props.data[4]}<br></br>

      {props.data.map((item,index)=><><br></br>mark:{index} = {item}</>)}
    </div>
  )
}

export default App


/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props: properties</h1>
      <h2>share data from one Component to another Component</h2>
      <h2>Your Name: {props.data}</h2>
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var stud={
    sno:1,
    sname:'Keerthivasan G',
    marks:{
      tamil:100,
      english:100,
      maths:101,
      science:99,
      social:100
    },
    rank:1,
    result:"PASS"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>Student number:{stud.sno}</h2>
      <h2>Student name:{stud.sname}</h2>
      <h2>Student tamil mark:{stud.marks["tamil"]}</h2>
      <h2>Student english mark:{stud.marks["english"]}</h2>
      <h2>Student maths mark:{stud.marks.maths}</h2>
      <h2>Student science mark:{stud.marks.science}</h2>
      <h2>Student social mark:{stud.marks["social"]}</h2>
      <h2>Student Rank:{stud.rank}</h2>
      <h2>Student Result:{stud.result}</h2>
    </div>
  )
}

export default App


/*import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:'Keerthivasan G',
    mark:100,
    rank:1,
    result:"pass"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>Student number:{stud.sno}</h2>
      <h2>Student name:{stud.sname}</h2>
      <h2>Student Mark:{stud.mark}</h2>
      <h2>Student Rank:{stud.rank}</h2>
      <h2>Student Result:{stud.result}</h2>
    </div>
  )
}

export default App



/*import React from 'react'
function App() {
  var arr=[11,22,33,44,55,66,77,88,99];
  var big=arr[0];
  return (
    <div>
      
      <h1>Array Demo</h1>
      {arr.map((item)=>item)}
      <br></br>
      {arr.map((item)=><>{item} </>)}
      {arr.map((item)=><><br></br>{item}</>)}

      <ol type='I'>
      {arr.map((v)=><li>{v}</li>)}
      <h1>biggest Number</h1>
      </ol>

      <div style={{display:"none"}}>
      {arr.map((v)=><>{big<v && <>{big=v}</>}</>)}
      </div>

      <h1>biggest number: {big}</h1>

    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var arr=[11,22,33,44,55,66]
  return (
    <div>
      <h1>Array</h1>
      <h2>array value index : 0 : {arr[0]}</h2>
      <h2>array value index : 1 : {arr[1]}</h2>
      <h2>array value index : 2 : {arr[2]}</h2>
      <h2>array value index : 3 : {arr[3]}</h2>
      <h2>array value index : 4 : {arr[4]}</h2>
      <h2>array value index : 5 : {arr[5]}</h2>
    </div>
  )
}

export default App


/*function App() {
  var avg=90;
  var res="fail";
  return (
    <div>
      <h1>4. Nested if</h1>
      <h1>Grade System:</h1>
      <h2>
        { 
        (res==="pass" && ((avg>=85 && "outstanding") || 
        (avg>=75 && "excellent")||
        (avg>=65 && "very good") || 
        (avg>=55 && "good") || 
        "fair")) || "no grade"
        }
      </h2>
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>Grade Calculation</h1>
      <h2>
        {mark} is {(mark>=85 && "outstanding") || (mark>=75 && "excellent")||(mark>=65 && "very good") || (mark>=55 && "good") || "fair"}
      </h2>
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var n=0;
  return (
    <div>
      <h1>3. if else if Statement or else if ladder</h1>
      <h2>{n} is {(n>0 && "+ve") || (n<0 && "-ve")|| "zero"}</h2>
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var y=2028;
  return (
    <div>
      <h1> Find given no. is leap year or not using if else</h1>
      <h2>Year :{y}</h2>
      <h2>{y} is {(y%4===0 && "Leap" ) || "Not leap"} Year</h2>
    </div>
  )
}
export default App

/*import React from 'react'

function App() {
  var n=47;
  return (
    <div>
      <h1> Find given no. is even or odd using if else</h1>
      <h2>Number:{n}</h2>
      <h2>{n} is {(n%2===0 && "Even" ) || "Odd"} Number</h2>
    </div>
  )
}

export default App


/*import React from 'react'

function App() {
  var n1=100;
  var n2=1001;
  return (
    <div>
      <h1>greatest among 2 numbers using if else</h1>

      <h2>number 1: {n1}</h2>
      <h2>number 2: {n2}</h2>
      <h2>{(n1>n2 && n1) || n2 } is biggest number</h2>
    </div>
  )
}
export default App


/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>2.if else Statement</h1>
      <h2>Mark : {mark}</h2>
      <h2>Result:</h2>
      <h2>{(mark>34 && "PASS") || "FAIL"}</h2>   
    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var mark=100;
  return (
    <div>
      <h1>1. Simple If Statement</h1>
      <h2>Mark : {mark}</h2>
      <h2>Result:</h2>
      <h2>{mark>34 && "PASS"}</h2>
      <h2>{mark<=34 && "FAIL"}</h2>   
    </div>
  )
}

export default App


/*import './App.css'
import React from 'react'
import myimg from './img/Nature.jpg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}

export default App
/*import React from 'react'
import myimg from './img/Nature.jpg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}

export default App

/*var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
    <h1>Welcome to React Expression</h1>
    <h2>A value:{a}</h2>
    <h2>B value:{b}</h2>
    <h2>C value:{c}</h2>
    <h2>Total values:{a+b+c}</h2>
    </>
  )
}
export default App;

/*import React from "react";
class App extends React.Component
{
  render(){
    return(
      <>
        <h1>welcome to react js</h1>
        <h2>welcome to react js</h2>
        <h6>welcome to react js</h6>
      </>
    )
  }
}
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/