import React from 'react'
import Buttons from './Buttons'

const ApodDescription = (props) => {
  console.log('desc', props)
  return (
    <div>
      {/* <div className='apod-main'> */}
        <div className='apod-desc'>
          <h3>
            {props.desc.title} by {props.desc.copyright}
          </h3>
          <p>{props.desc.explanation}</p>
        </div>
        <div className='apod-buttons'>
          <Buttons data={props.desc} />
        </div>
      {/* </div> */}
    </div>
  )
}

export default ApodDescription
