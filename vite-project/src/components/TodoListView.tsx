import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react-lite'
import { TodoList } from './TodoList'
import ITodo from '../types/ITodo'

const TodoListView: React.FC = observer(
  ({ todoList }: { todoList: TodoList }) => (
    <div>
      <ul>{todoList.todos.map((todo) => Todo)}</ul>
    </div>
  )
)

const TodoView: React.FC = observer(({ todo }: { todo: ITodo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    {todo.title}
  </li>
))
