import React, { Component } from 'react'
// 引入 redux
import store from '../store'
import { Input, Button, List, message } from 'antd'
import './TodoList.css'
import { CHANGE_INPUT, ADD_LIST, DEL_LIST } from '../store/actionType'

class TodoList extends Component {
  constructor (props) {
    super(props)
    // 将 redux 仓库中的数据赋予给 state
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.AddList = this.AddList.bind(this)
    store.subscribe(
      this.storeChange
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
          <div className="list-wrapper">
            <List
              bordered
              dataSource={this.state.list}
              renderItem={
                (item, index) => 
                <List.Item onClick={this.delList.bind(this,index)}>
                  {item}
                </List.Item>
              }
            >
            </List>
          </div>
        </div>
      </div>
    )
  }
  
  // 监听数据
  inputChange (e) {
    const active = {
      type: CHANGE_INPUT,
      value: e.target.value
    }
    store.dispatch(active)
  }

  // 保存数据
  AddList () {
    if (!this.state.inputValue) {
      message.info('不能为空哦')
      return
    }
    const active = {
      type: ADD_LIST
    }
    store.dispatch(active)
  }

  // 更新订阅
  storeChange () {
    this.setState (store.getState())
  }

  //删除数据
  delList (index) {
    const active = {
      type: DEL_LIST,
      value: index
    }
    store.dispatch(active)
  }
}
 
export default TodoList