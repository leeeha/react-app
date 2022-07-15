import React, { Component } from "react";

class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            // 여러 항목을 자동으로 생성할 때는, 각 항목이 key 값을 가져야 한다. 
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a>
            </li>)
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