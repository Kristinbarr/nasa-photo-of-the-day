import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import key from '../../key.env'
import TopBar from './TopBar/TopBar'
import ApodSection from './ApodSection/ApodSection'
import apidata from './apidata'
import "./index.css";

function App() {
  const [photo, setPhoto] = useState(null)
  const [desc, setDesc] = useState('')

  useEffect(() => {
    setPhoto(apidata.data.url)
    setDesc(apidata.data)
  }, [])

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-13'
  //     )
  //     .then((response) => {
  //       setPhoto(response.data.url)
  //       setDesc(response.data)
  //     })
  //     .catch((error) => {
  //       console.log('something went wrong!', error)
  //     })
  // }, [])

  return (
    <div className='App'>
      <TopBar />
      <ApodSection photo={photo} desc={desc} />
      {/* <Grid limit={20} /> */}
    </div>
  )
}

export default App;
