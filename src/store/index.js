import { createStore } from 'redux'
import redecer from './reducer'

const store = createStore(
  redecer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store