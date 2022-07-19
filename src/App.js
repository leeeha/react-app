import React, { Component } from "react";
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interaction'}
      ]
    }
  }

  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
         {/* <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}>
          </Subject> */}
          <header>
            <h1><a href="/" onClick={function(e){
              console.log(e);
              // 링크를 클릭할 때마다 앱이 리로드 되는 것을 막기 위해 호출하는 함수  
              e.preventDefault(); 

              // Uncaught TypeError: Cannot read properties of undefined (reading 'state')
              //this.state.mode = 'welcome'; // 이렇게 하면 렌더링 불가 (생성자에서는 가능)
              this.setState({ // 동적으로 렌더링하고 싶을 때는 setState를 사용해야 리액트가 상태 변화를 알아차림. 
                mode:'welcome'
              });

              // bind(this)에 의해 render 함수 안에서 사용되는 this는 
              // App 컴포넌트 자체를 가리키게 됨. 
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
          </header>
          <TOC data={this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App; 
