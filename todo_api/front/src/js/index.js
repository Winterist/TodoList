import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './components/todobox';
import DataProvider from "./components/DataProvider";

import './../css/index.css';

export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
    	<DataProvider endpoint="api/" render={data => <TodoBox endpoint="api/submit/" data={data}/>} />

    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"))
