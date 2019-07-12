import React, { useState, useEffect } from 'react'

import { fetchData } from '../../api'

import './App.module.css'

export const AppContext = React.createContext({
  data: {},
})

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchData(process.env.REACT_APP_API_ENDPOINT)
      const user = data.results[0]

      setData(user)
    }, 2000)

    return () => clearInterval(interval)
  })

  return (
    <div className="App">
      <AppContext.Provider value={data}>
        <p>Hello</p>
      </AppContext.Provider>
    </div>
  )
}

export default App
