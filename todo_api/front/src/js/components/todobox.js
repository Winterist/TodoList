import React from 'react';
import TodoList from './todolist';
import AddTodoItem from './addtodoitem';
import PropTypes from "prop-types";


import {Button,Icon,Row,Col} from 'antd';



export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       data: this.props.data
    }
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);

  }
  generateGUID() {
    let data = this.state.data;
    if(data.length==0){
      return 1
    }
    else{
      return data[0].id++
    }
  }
  handleToggleComplete(taskId) {
    let data = this.state.data;
    for (let item of data) {
      if (item.id === taskId) {
        item.complete = item.complete === "true" ? "false" : "true"
      }
    }
    this.setState({data})
  }
  handleTaskDelete(taskId) {
    let data = this.state.data
    data = data.filter(task => task.id !== taskId)
    this.setState({data})
  }
  handleAddTodoItem(task,description){
    let data=this.state.data
    let newItem={
      id:this.generateGUID(),
      task,
      description,
      complete:"false"
    }
    data=data.concat([newItem])
    this.setState({data})
  }
 

 static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  
  handleSubmit = e => {
    e.preventDefault();

    let data = this.state.data;
    let json_get={"data_get":data}
      const conf = {
      method: "post",
      body: JSON.stringify(json_get),

      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
    
  };



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="well">
          <h1 className="text-center">TodoList</h1>
          <TodoList data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete}/>
          <AddTodoItem saveNewItem={this.handleAddTodoItem}/>
        </div>
        <Row>
          <Col span={12}>
          </Col>
          <Col span={12}>
            <Button htmlType="submit" className="pull-right" ><Icon type="save" />save</Button>
          </Col>
        </Row>
        </form>
        </div>
    )
  }
}
