import React, { Component } from "react";
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import Control from "./components/Control"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break; 
        }
        i++; 
      }
    }

    return (
      <div className="App">
         <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}

            // WEB을 클릭하면 welcome 모드가 되도록 
            onChangePage={function(){
              this.setState({mode:'welcome'});
            }.bind(this)}></Subject>

          <TOC 
            data={this.state.contents}

            // 각 항목을 클릭하면 read 모드로 바뀌고, 
            // id에 따라 아래의 Content가 바뀌도록 
            onChangePage={function(id){ 
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
            }.bind(this)}></TOC>

          <Control 
            // CRUD 모드 선택 
            onChangeMode={function(_mode){
              this.setState({
                mode:_mode
              })
            }.bind(this)}></Control>

          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App; 
