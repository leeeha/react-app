import React, { Component } from "react";
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
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

  render(){
    console.log('App render');
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if(this.state.mode === 'read'){
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents 
        this.max_content_id++;

        // push는 원본 자체를 변경 
        // this.state.contents.push(  
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );

        // concat은 변경된 배열의 복사본을 리턴 (성능에 더 유리) 
        var _contents = this.state.contents.concat( 
          {id:this.max_content_id, title:_title, desc:_desc}
        )

        // 리액트가 상태 변화를 알아듣도록!  
        this.setState({
          contents:_contents
        })

        console.log(_title, _desc); 
      }.bind(this)}
      ></CreateContent>
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

          {_article} 
      </div>
    );
  }
}

export default App; 
