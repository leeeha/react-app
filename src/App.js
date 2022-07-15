import React, { Component } from "react";
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';

class App extends Component {
  // render() 보다 먼저 실행되어 초기화를 담당하는 생성자 
  constructor(props){
    // 부모 클래스의 생성자를 먼저 호출해주지 않으면, this에 접근 불가! 
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'}, 
      // 속성이 가진 데이터가 여러 개일 때는 배열 사용
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interaction'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
         <Subject
            // props의 데이터를 state에서 가져옴. 
            title={this.state.subject.title}
            sub={this.state.subject.sub}>
          </Subject>

          <TOC 
            // contents에 담긴 배열 정보를 TOC 컴포넌트에 주입하기 
            data={this.state.contents}>
          </TOC>

         <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App; 
