import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import todoStore from './stores/TodoStore'

function App() {
  const [count, setCount] = useState(0)
  todoStore.addTodo('read Mobx tutorial')
  console.log(todoStore.report())

  todoStore.addTodo('try Mobx')
  console.log(todoStore.report())

  todoStore.todos[0].completed = true
  console.log(todoStore.report())

  todoStore.todos[1].task = 'try Mobx in own project'
  console.log(todoStore.report())

  todoStore.todos[0].task = 'grok Mobx tutorial'
  console.log(todoStore.report())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App