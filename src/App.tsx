import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="app-container">
      <Navbar />
      <main className="container mt-4">
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  )
}

export default App
