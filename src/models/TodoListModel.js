import {action, computed, observable} from 'mobx'

class TodoListModel {
  id = -1

  @observable todos = []

  @action
  addOne(txt) {
    this.todos.push({
      id: ++this.id,
      txt,
      isChosed: false
    })
  }

  @action
  rmOne(index) {
    this.todos.splice(index, 1)
  }

  @computed
  get countCheckedTxt() {
    let len = this.todos.filter(item => !item.isChosed).length
    return len ? `${len} 个完成` : `暂无 todo 列表`
  }

}

export default new TodoListModel()
