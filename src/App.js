import React, { Component } from "react";
import './App.css';

class Subject extends Component {
  render(){ // 클래스 안에 속한 메소드는 function 키워드 생략 가능  
    return (
      // 컴포넌트는 반드시 하나의 최상위 태그만 사용해야 함. 
      <header>
        <h1>WEB</h1>
        World Wide Web!
      </header>
    );
  }
}

class TOC extends Component { // Table Of Content (목차) 
  render(){
    return(
      // jsx라는 문법 덕분에 js 파일에 html 태그를 넣을 수 있음. 
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
         <Subject></Subject>
         <TOC></TOC>
         <Content></Content>
      </div>
    );
  }
}

export default App; 