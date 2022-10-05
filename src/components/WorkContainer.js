import React, { useState, useRef } from 'react'
import { shuffle } from '../helpers'
import classes from './WorkContainer.module.css'

const WorkContainer = () => {
    const [content, setContent] = useState(false)

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

    setTimeout(() => {
        setContent(true)
    }, 500)

    return (
        <div className={`${classes['work-container']} ${content ? classes['work-container-active'] : ''}`}>
            <h1 className={classes['title']}>Line shuffler</h1>
            <textarea ref={ref} placeholder={'Hello world'}></textarea>
            <div className={classes['button-container']}>
                <button onClick={shuffleTextArea}>Shuffle</button>
                <button onClick={copyToClipboard}>Copy</button>
                <button onClick={clearTextArea}>Clear</button>
            </div>
        </div>
    )
}

export default WorkContainer
