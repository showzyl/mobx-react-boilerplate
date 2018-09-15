import React from 'react'
import {render} from 'react-dom'
import DevTools from 'mobx-react-devtools'
import TodoList from './pages/TodoList'
import {Provider} from 'mobx-react'

import todoListModel from './models/TodoListModel'
import txtModel from './models/TxtModel'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Test from './pages/Test'

let stores = {
  todoListModel,
  txtModel
}

render(
  <Router>
    <Provider {...stores}>
      <div className='app'>
        <DevTools/>

        <Switch>
          <Route exact path="/" component={TodoList} />      
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.getElementById(`root`)
)


// playing around in the console
window.stores = stores
