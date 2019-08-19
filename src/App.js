import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            inputValue: 'unnamed',
            list: ['ii'],
            id_list: 'list',
            cancelItem: 'X',
            cancelButton: 'cancelButton',
            voteNumber: [1],
            cancelDiv: "cancelDiv",
            cancelIndex: 0
        };
    };

    render() {
        return (
            <div>
                <h1>输入活动名称</h1>
                <div id="nameInput">
                    <input
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}
                    />
                    <Link to={{
                        pathname: '/detail/',
                        state: {eventName: this.state.inputValue}
                    }}>

                        <button>提交</button>
                    </Link>
                </div>
            </div>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
}

export default App;
