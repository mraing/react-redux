import { CHANGE_INPUT, ADD_LIST, DEL_LIST } from './actionType'
const defaultStore = {
  inputValue: '',
  list: [
    '早 8 点董事晨会，勿缺席',
    '早 9 点董事晨会，勿缺席',
    '早 10 点董事晨会，勿缺席'
  ]
}


export default (state = defaultStore, action) => {

  // 原来的数据：state
  // 新接收到的数据： action
  // Redux不能改变 state，只能接收 state
  let newState =  JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 监听数据
    case CHANGE_INPUT:
      newState.inputValue = action.value
      return newState
    // 新增数据
    case ADD_LIST:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    // 删除数据
    case DEL_LIST:
      newState.list.splice(action.value,1)
      return newState
    default:
      break;
  }

  return state
}