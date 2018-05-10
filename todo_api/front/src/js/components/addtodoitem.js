import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Form, Input, Button,notification } from 'antd';

const { TextArea } = Input;

export default class AddTodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.saveNewItem = this.saveNewItem.bind(this)

  }
  saveNewItem(e) {
    e.preventDefault()
    let element = ReactDOM.findDOMNode(this.refs.newItem)
    let task = element.value
    let elementB= ReactDOM.findDOMNode(this.refs.newDesc)
    let description=elementB.value
    
    if (!task) {
      notification.open({
        description: '内容不得为空！',
    });
    } else {
      this.props.saveNewItem(task,description)
      element.value = ""
      elementB.value=""
    }
  }


  render() {
    return (
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input id="newItem" ref="newItem" type="text" placeholder="请输入待办事项"></Input>
          <p></p>
          <TextArea id="newDesc" rows={2} ref="newDesc" type="textarea" placeholder="请输入具体描述"></TextArea>

          <Button type="primary" className="pull-right" onClick={this.saveNewItem}>Add</Button>
        </Form.Item>
      </div>
    )
  }
}
