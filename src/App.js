import React, { Component } from "react";
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Control from "./components/Control"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3; // ui에 영향을 주지 않으므로 state로 선언하지 않는다. 
    this.state = {
      mode:'create',
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

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i++;
    }
  }

  getContent(){
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if(this.state.mode === 'read'){
      // 현재 선택된 id에 해당하는 컨텐츠를 가져와서  
      var _content = this.getReadContent();
      // 그 컨텐츠의 타이틀과 설명을 ReadContent 컴포넌트의 props로 주입시킨다. 
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }
    else if(this.state.mode === 'create'){
      // 제출 버튼을 누르면 title과 desc 값을 가져와서 
      _article = <CreateContent onSubmit={function(_title, _desc){
        // this.state.contents에 새로운 항목으로 추가하기 
        this.max_content_id++;

        // concat은 변경된 배열의 복사본을 리턴 (성능에 더 유리) 
        var _contents = this.state.contents.concat( 
          {id:this.max_content_id, title:_title, desc:_desc}
        )

        // 리액트가 상태 변화를 알아듣도록!  
        this.setState({
          contents:_contents
        })
      }.bind(this)}
      ></CreateContent>
    }
    else if(this.state.mode === 'update'){
      // 현재 선택된 id에 맞는 컨텐츠를 data라는 props에 주입시킨다. 
      _content = this.getReadContent();
      
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        this.max_content_id++;
        var _contents = this.state.contents.concat( 
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
        })
      }.bind(this)}
      ></UpdateContent>
    }

    return _article;
  }

  render(){
    console.log('App render');
    return (
      <div className="App">
         <Subject
            // props에 state를 주입시킨다. 
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

          { // 현재 모드에 해당하는 컴포넌트가 리턴됨. 
            this.getContent()
          }
      </div>
    );
  }
}

export default App; 
