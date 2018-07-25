//import modules
import React from 'react'

import { Provider } from 'react-redux'

//import store
import store from './store'

//import style
import './style/main.sass'

import Cart from './Cart'

export default () =>(
  <Provider store={store}>
    <div>
      <Cart/>
    </div>
  </Provider>
)
