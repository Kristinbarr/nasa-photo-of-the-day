import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import key from '../../key.env'
import TopBar from './TopBar/TopBar'
import ApodSection from './ApodSection/ApodSection'
import apidata from './apidata'
import "./App.scss";

function App() {
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState(null)
  const [desc, setDesc] = useState('')
  console.log('app date', date)

  useEffect(() => {
    setPhoto(apidata.data.url)
    setDesc(apidata.data)

  }, [])

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date={date}'
  //     )
  //     .then((res) => {
  //       console.log('res',res)
  //       setPhoto(res.data.url)
  //       setDesc(res.data)
  //     })
  //     .catch((error) => {
  //       console.log('something went wrong!', error)
  //     })
  // }, [])

  return (
    <div className='App'>
      <TopBar setDate={setDate} />
      <ApodSection photo={photo} desc={desc} />
      {/* <Grid limit={20} /> */}
    </div>
  )
}

export default App;
