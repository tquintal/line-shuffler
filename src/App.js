import { useRef } from 'react'
import { shuffle } from './utils'
import { FiGithub } from 'react-icons/fi'

function App() {
  // const defaultValues = '🍏\n🍎\n🍐\n🍊\n🍋\n🍌\n🍉\n🍇\n🫐\n🍓\n🍈\n🍒\n🍑\n🥭\n🍍\n🥥\n🥝\n🍅\n🥑\n🥒'

  const ref = useRef(null)

  const shuffleTextArea = () => {
    const shuffled = shuffle(ref.current.value.split('\n'))
    ref.current.value = ''

    for (let i = 0; i < shuffled.length; i++) {
      if (shuffled[i] !== '')
        ref.current.value += `${shuffled[i]}\n`
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ref.current.value)
    alert('Copied to clipboard')
  }

  const clearTextArea = () => {
    ref.current.value = ''
  }

  return (
    <div className='main-container'>
      <div className='work-container' >
        <h1 className='title'>Line shuffler</h1>
        <textarea ref={ref} placeholder={'Write here'}></textarea>
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
