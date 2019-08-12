import React, { Component } from 'react'
import { Input, Button } from 'antd'

class TodoList extends Component {
  render() { 
    return (
      <div>
        <div>
          <Input placeholder="default size" />
          <Button type="primary">Primary</Button>
        </div>
      </div>
    )
  }
}
 
export default TodoList