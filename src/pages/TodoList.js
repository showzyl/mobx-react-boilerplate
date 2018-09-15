/**
 *
 * Created by showzyl on 2018/9/6
 *
 *  [ 、 ( 、 + 、 -
 *
 **/


import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { Switch, Route, Link} from 'react-router-dom'

import Header from './Header'
import Test from './Test'


@inject('todoListModel')
@observer
class TodoList extends Component {
  handleRm(index, e) {
    // console.log(`e: `, e)
    // console.log(`index: `, index)
    this.props.todoListModel.rmOne(index)
  }

  render() {
    let todos = this.props.todoListModel['todos']

    return (
      <div className={`container`}>
        <Header/>
        <ul>
          {
            todos.map((item, i) => {
              // return <Item key={item.id} item={item}/>
              return (
                <li className={item.isChosed ? 'line' : ''} key={item.id} data-id={item.id}>
                    <input type="checkbox"
                           onClick={() => item.isChosed = !item.isChosed }/>
                    <span> {item.txt} </span>
                  <span
                    onClick={this.handleRm.bind(this, i)}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      margin: "0 0 0 20px"
                    }}> X </span>
                </li>
              )
            })
          }
        </ul>

        <span>{this.props.todoListModel.countCheckedTxt}</span>


        <div>
          <Link to='/test'>点击我去`test`页面</Link>
        </div>

      

      </div>
    )
  }
}


export default TodoList

