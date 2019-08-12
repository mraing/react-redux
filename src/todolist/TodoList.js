import React, { Component } from 'react'
// 引入 redux
import store from '../store'
import { Input, Button, List } from 'antd'
import './TodoList.css'


class TodoList extends Component {
  constructor (props) {
    super(props)
    // 将 redux 仓库中的数据赋予给 state
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.AddList = this.AddList.bind(this)
    store.subscribe(
      this.storeChange,
      this.AddList
    )
  }

  render() {
    return (
      <div className="input-wrapper">
        <div>
          <Input
            placeholder="write something"
            style={{ width: 300, marginRight: 10 }}
            onChange={this.inputChange}
            value={this.state.inputValue}
          />
          <Button
            onClick={this.AddList}
            type="primary"
            style={{width: 65}
          }>
            增加
          </Button>
        </div>
        <div className="list-wrapper">
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          >
          </List>
        </div>
      </div>
    )
  }
  
  // 监听数据
  inputChange (e) {
    const active = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(active)
  }

  // 保存数据
  AddList () {
    const active = {
      type: 'addList',
      value: this.state.inputValue
    }
    store.dispatch(active)
  }

  // 更新数据
  storeChange () {
    this.setState (store.getState())
  }
}
 
export default TodoList