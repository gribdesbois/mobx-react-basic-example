import { makeObservable, observable, computed } from 'mobx'
import ITodo from '../types/ITodo'

export class TodoList {
  todos: ITodo[] = []

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length
  }

  constructor(todos: ITodo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    })
    this.todos = todos
  }
}
