/**
 *
 * Created by showzyl on 2018/9/6
 *
 *  [ 、 ( 、 + 、 -
 *
 **/


import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Header from './Header'


@inject('todoListModel')
@inject('txtModel')
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

        <div className={`testTxtModel`} style={{ margin: '20px' }}>
          {/*{JSON.stringify()}*/}
          <span style={{ margin: '0 20px 0 0' }}>{this.props.txtModel.txt}</span>
          <button onClick={(e) => this.props.txtModel.changeTxt()}>点击我改变`{this.props.txtModel.txt}`的txt </button>
        </div>

      </div>
    )
  }
}


export default TodoList

