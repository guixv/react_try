import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class Thing extends React.Component {

    constructor(props){
        super(props);
        this.state={
            eventName:this.props.location.state.eventName,
            inputValue:'unnamed',
            list:['ii'],
            id_list:'list',
            cancelItem:'X',
            cancelButton:'cancelButton',
            voteNumber:[1],
            cancelDiv:"cancelDiv",
            cancelIndex:0
        };
    };

    render(){
        return(
            <div>
                <h1>关于{this.state.eventName}的投票</h1>
                <div id="nameInput">
                    <input
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}
                    />
                    <button onClick={this.solvingClick.bind(this)}>提交</button>
                </div>
                <div id={this.state.id_list}>
                    <ul>
                        <li>
                            <strong className={this.state.cancelButton}>删除 </strong>
                            <span className="name">
                            姓名
                            </span>
                            <span className="voteNumber">
                            选票
                            </span>
                            <span className="addVote">
                                加票
                            </span>
                            <span className="subVote">
                                减票
                            </span>

                        </li>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <strong className={this.state.cancelButton}
                                                onClick={this.cancelButtonClicked.bind(this,index)}
                                                onMouseOver={this.onMouseAction.bind(this)}
                                                onMouseOut={this.offMouseAction.bind(this)}
                                        >
                                            {this.state.cancelItem}
                                        </strong>
                                        <span className="name">
                                            {item}
                                        </span>
                                        <span className="voteNumber">
                                            {this.state.voteNumber[index]}
                                        </span>
                                        <span className="addVote" onClick={this.addAction.bind(this,index)}>
                                            +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                        <span className="subVote" onClick={this.subAction.bind(this,index)}>
                                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div id={this.state.cancelDiv}>
                        <strong>
                            确认删除{this.state.list[this.state.cancelIndex]}?<br/>
                        </strong>
                        <button onClick={this.cancelEvent.bind(this)} >确认</button>
                        <button onClick={this.backEvent.bind(this)}>取消</button>
                    </div>
                </div>
            </div>
        );
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    }

    solvingClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            voteNumber:[...this.state.voteNumber,0],
            inputValue:''
        });
        console.log(this.state.voteNumber)
    }

    cancelButtonClicked(index){
        this.setState({
            cancelDiv:"cancelDivDisplay",
            cancelIndex:index
        })
    }

    cancelEvent(){
        const list=[...this.state.list];
        const voteNumber=[...this.state.voteNumber];
        voteNumber.splice(this.state.cancelIndex,1);
        list.splice(this.state.cancelIndex,1);
        this.setState({
            cancelDiv:"cancelDiv",
            list:list,
            voteNumber:voteNumber
        })
    }

    backEvent(){
        this.setState({
            cancelDiv:"cancelDiv"
        })
    }

    onMouseAction(){
        this.setState({
            cancelItem:'o'
        })
    }

    offMouseAction(){
        this.setState({
            cancelItem:'X'
        })
    }

    addAction(index){
        const voteNumber=[...this.state.voteNumber];
        voteNumber[index]++;
        this.setState({
            voteNumber:voteNumber
        })
    }

    subAction(index){
        const voteNumber=[...this.state.voteNumber];
        if(voteNumber[index]>0)
            voteNumber[index]--;
        this.setState({
            voteNumber:voteNumber
        })
    }
}



export default Thing;
