import React from 'react'
import ApodDescription from './ApodDescription'

const ApodSection = (props) => {
  console.log('img',props)
  return (
    <section className='apod-section'>
      <h1 className='apod-title'>Astronomy Photo of the Day</h1>
      <div className='apod-main'>
        <ApodDescription desc={props.desc} />
        <img src={props.photo} alt='photo of the day' />
      </div>
    </section>
  )
}

export default ApodSection
