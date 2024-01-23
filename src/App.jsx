
import { useState, useEffect, lazy, startTransition } from 'react'
import './App.css'

import Bears from './components/Bears'
const Child = lazy(() => import("./components/Child"))
import List from './components/List'

function App() {


 



  return (
    <>
   

      <List/>

    </>
  )
}

export default App
