import {action, observable} from 'mobx'

class TxtModel {

  @observable txt = `foo`

  @action
  changeTxt() {
    if (this.txt === `foo`) {
      this.txt = `bar`
    } else {
      this.txt = `foo`
    }
  }

}

export default new TxtModel()
