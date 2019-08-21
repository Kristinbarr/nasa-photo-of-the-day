import React from 'react'
import ApodDescription from './ApodDescription'
import './ApodSection.scss'

const ApodSection = (props) => {
  // console.log('img',props)
  return (
    <section className='apod-section'>
      <h1 className='apod-title'>Astronomy Photo of the Day</h1>
      <div className='apod-main'>
        <ApodDescription desc={props.desc} />
        <img src={props.photo} alt='astronomy' />
      </div>
    </section>
  )
}

export default ApodSection
