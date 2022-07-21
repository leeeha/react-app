import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc
    }

    // 중복되는 코드 제거하기 
    this.inputFormHandler = this.inputFormHandler.bind(this);    
  }

  inputFormHandler(e){
    this.setState({
      // 현재 이벤트가 발생하고 있는 태그의 이름을 알아내서,  
      // 입력값에 따라 value 업데이트 하기  
      [e.target.name]: e.target.value 
    })
  }

  render() {
    console.log(this.props.data);
    console.log('UpdateContent render');

    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              // value로 넣어주는 값은 props가 아니라 state여야 함. 
              value={this.state.title} 
              // input 값에 따라 value의 상태가 동적으로 바뀌려면 onChange 사용 필수 
              onChange={this.inputFormHandler} 
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
