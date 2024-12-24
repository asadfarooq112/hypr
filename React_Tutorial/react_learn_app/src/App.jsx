import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Column from './components/Column.jsx'



export function MyButton() {
  return (
    <button> Hanji button NEW </button>
    )
}

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "Configure Database" },
    { id: 2, name: "Create API Endpoints" },
    { id: 3, name: "Design UI Mockups" },
  ]);

  return (
    <div>

      <Column title='todo' tasks={taskData} />

    </div>
  )

}

export default App


