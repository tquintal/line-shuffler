import { useRef } from 'react'
import { shuffle } from './utils'
import { FiGithub } from 'react-icons/fi'

function App() {
  const ref = useRef(null)

  const clearTextArea = () => {
    ref.current.value = ''
  }

  const shuffleTextArea = () => {
    const shuffled = shuffle(ref.current.value.split('\n'))
    clearTextArea()

    for (let i = 0; i < shuffled.length; i++) {
      if (shuffled[i] !== '')
        ref.current.value += shuffled[i] + '\n'
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ref.current.value)
    alert('Copied to clipboard')
  }

  return (
    <div className='main-container'>
      <div className='work-container' >
        <h1 className='title'>Line shuffler</h1>
        <textarea ref={ref} placeholder={'Hello world'}></textarea>
        <div className='button-container'>
          <button onClick={shuffleTextArea}>Shuffle</button>
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={clearTextArea}>Clear</button>
        </div>
      </div>
      <a href='https://github.com/tquintal/' target='_blank' rel='noreferrer' className='footer'><FiGithub /> tquintal</a>
    </div>
  )
}

export default App
