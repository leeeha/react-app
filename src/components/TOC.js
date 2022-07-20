import React, { Component } from "react";

class TOC extends Component {
    // props나 state에 따라 컴포넌트의 렌더링 여부를 결정할 수 있음. (성능 개선)
    shouldComponentUpdate(newProps, newState){
        console.log('===> TOC render shouldComponentUpdate'
        ,newProps.data
        ,this.props.data
        );

        // TOC 데이터가 그대로면, render 함수를 호출하지 않도록! 
        if(this.props.data === newProps.data){
            return false;
        }

        return true;
    }

    // TOC 상태가 바뀌지 않을 때는 이 함수가 호출되지 않았으면 좋겠어! 
    render(){
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id} 
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >{data[i].title}</a>
            </li>);
            i++;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;