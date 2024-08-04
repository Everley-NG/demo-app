import React from 'react'

export const Quiz = () => {
  return (
    <div className='quiz'>
        <h1>English Proficiency Test</h1>
        <div className='quiz-form'>
            <h2 id='question'>Question</h2>
            <div>
                <button className='btn'>Answer 1</button>
                <button className='btn'>Answer 2</button>
                <button className='btn'>Answer 3</button>
                <button className='btn'>Answer 4</button>
            </div>
            <button id='next-btn'></button>
        </div>
    </div>
  )
}
