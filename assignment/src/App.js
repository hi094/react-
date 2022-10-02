import React from 'react'
import List from './components/List'

const App = () => {
  return (
    <>
      <List items={[{ text: 'Meta' }, { text: 'Amazon' }, { text: 'Apple' }, { text: 'Netflix' }, { text: 'Google' }, { text: 'India' }]} />
    </>
  )
}

export default App
