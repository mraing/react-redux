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
  if (action.type === 'changeInput') {
    let newState =  JSON.parse(JSON.stringify(defaultStore))
    newState.inputValue = action.value
    return newState
  }

  // 新增列表
  if (action.type === 'addList') {
    let newState = JSON.parse(JSON.stringify(defaultStore))
    newState.list.push(action.value)
    return newState
  }

  return state
}