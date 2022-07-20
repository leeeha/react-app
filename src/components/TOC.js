import React, { Component } from "react";

class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data; // 상위 컴포넌트에서 전달 받음. 
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    // bind 함수의 인자로 id를 직접 전달할 수도 있고 
                    // data-id 라는 속성 값을 이용할 수도 있음.
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