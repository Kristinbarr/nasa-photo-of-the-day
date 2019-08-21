import React, { useState } from 'react'
import Buttons from './Buttons'

const ApodDescription = (props) => {
  // console.log('desc', props.desc)
  const [ viewdate, setViewdate] = useState(0)

  return (
    <>
      <div className='apod-content'>
        <h3>
          {props.desc.title} by {props.desc.copyright}
        </h3>
        <p>{props.desc.explanation}</p>
        <div className='apod-buttons'>
          <Buttons data={props.desc} />
        </div>
      </div>
    </>
  )
}

export default ApodDescription
