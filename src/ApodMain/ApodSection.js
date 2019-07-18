import React, { useState, useEffect } from 'react'
import axios from 'axios'
import key from '../../key.env'
import ApodDescription from './ApodDescription'

const ApodSection = () => {
  const [photo, setPhoto] = useState(null)
  const [desc, setDesc] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${key}&date=2019-07-13`
      )
      .then((response) => {
        setPhoto(response.data.url)
        setDesc(response.data)
        // console.log(response)
      })
      .catch((error) => {
        console.log('something went wrong!', error)
      })
  }, [])


  return (
    <section className='apod-section'>
      <h1 className='apod-title'>Astronomy Photo of the Day</h1>
      <div className='apod-main'>
        <ApodDescription desc={desc} />
        <img src={photo} alt='APoD' />
      </div>
    </section>
  )
}

export default ApodSection
