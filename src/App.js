import React, { useState } from 'react'
// import { shuffle } from './helpers'
import classes from './App.module.css'
import { FiGithub } from 'react-icons/fi'
import WorkContainer from './components/WorkContainer'

function App() {
  const [footer, setFooter] = useState(false)

  setTimeout(() => {
    setFooter(true)
  }, 500)

  return (
    <React.Fragment>
      {/* <WorkContainer onShuffle={shuffle} /> */}
      <WorkContainer />
      <a href='https://github.com/tquintal/' target='_blank' rel='noreferrer' className={`${classes['footer']} ${footer ? classes['footer-active'] : ''}`}><FiGithub /> tquintal</a>
    </React.Fragment>
  )
}

export default App
