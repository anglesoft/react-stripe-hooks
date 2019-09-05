import React from 'react'
import { useMyHook } from 'r-s-h'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App