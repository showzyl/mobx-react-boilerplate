import React from "react"
import {render} from "react-dom"
import DevTools from "mobx-react-devtools"
import TodoList from "./pages/TodoList"
import {Provider} from "mobx-react"

import todoListModel from './models/TodoListModel'
import txtModel from './models/TxtModel'


let stores = {
  todoListModel,
  txtModel
}

render(
  <Provider {...stores}>
    <div className="app">
      <DevTools/>
      <TodoList/>
    </div>
  </Provider>,
  document.getElementById(`root`)
)


// playing around in the console
window.stores = stores
