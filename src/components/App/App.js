import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'

import { fetchData } from '../../api'

export const AppContext = React.createContext({
  data: {},
})

function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const dataUpdater = async () => {
    const data = await fetchData(process.env.REACT_APP_API_ENDPOINT)
    const user = data.results[0]

    setData(user)
    setLoading(false)
  }

  if (!data) {
    dataUpdater()
  }

  useEffect(() => {
    const interval = setInterval(dataUpdater, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="App">
      <AppContext.Provider value={data}>
        {isLoading ? <h1>Loading data...</h1> : <Layout />}
      </AppContext.Provider>
    </div>
  )
}

export default App
