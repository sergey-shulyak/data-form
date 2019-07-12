import React, { useState, useEffect } from 'react'

import { fetchData } from '../../api'

import './App.module.css'

export const AppContext = React.createContext({
  data: {},
})

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    setTimeout(async () => {
      setData(await fetchData(process.env.REACT_APP_API_ENDPOINT))
    }, 2000)
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
