/**
 *
 * Created by showzyl on 2018/9/5
 *
 *  [ 、 ( 、 + 、 -
 *
 **/


import React, {Component} from 'react'

import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";


@inject('todoListModel')
@observer
class Header extends Component {
  @observable txt = ''

  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    this.txt = e.target.value
  }

  onSubmitTxt = (e) => {
    if (!this.txt) return alert('提交不能为空')

    if(e.keyCode === 13){
      console.log(`回车`)
      this.addOne()
    }
  }

  addOne(){
    if (!this.txt) return alert('提交不能为空')

    this.props.todoListModel.addOne(this.txt)
    this.txt = ``
  }

  render() {
    return (
      <div className="header">
        <input
          placeholder={`请添加 计划 `}
          style={ {"border": "1px solid black"} }
          value={this.txt}
          type="text"
          className={`header-input`}
          onChange={(e) => this.handleChange(e)}
          onKeyUp={(e) => this.onSubmitTxt(e)}
        />
        <button onClick={(e) => this.addOne(e)}>提交</button>
      </div>
    )
  }
}


export default Header
