import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'


@inject('txtModel')
@observer
class Test extends Component {

  render() {

    return (
      <div className={`test-container`}>

        <div className={`testTxtModel`} style={{ margin: '20px' }}>
          <span style={{ margin: '0 20px 0 0' }}>{this.props.txtModel.txt}</span>
          <button onClick={(e) => this.props.txtModel.changeTxt()}>点击我改变`{this.props.txtModel.txt}`的txt </button>
        </div>

      </div>
    )
  }
}


export default Test