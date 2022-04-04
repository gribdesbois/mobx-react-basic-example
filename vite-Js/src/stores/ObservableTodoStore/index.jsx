import { autorun, computed, makeObservable, observable, action } from 'mobx'
class ObservableTodoStore {
  todos = []
  pendingRequests = 0

  constructor() {
    makeObservable(this, {
      todos: observable, // observable to signal MobX that these values can change over time
      pendingRequests: observable,
      completedTodosCount: computed, //derived from state
      report: computed,
      addTodo: action,
    })
    autorun(() => console.log(this.report))
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length
  }

  get report() {
    if (this.todos.length === 0) return '<none>'

    const nextTodo = this.todos.find((todo) => todo.completed === false)
    return (
      `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    )
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    })
  }
}

const observableTodoStore = new ObservableTodoStore()
export default observableTodoStore
