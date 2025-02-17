import React from 'react'
import Date from './Date'
import './TopBar.scss'

const TopBar = (props) => {
  return (
    <section className='topbar-section'>
      <img
        className='nasa-logo'
        src='https://api.nasa.gov/images/logo.png'
        alt='nasa logo'
      />
      <div className='top-date'>
        <div className='current-date'>
          <h5>VIEWING:&nbsp;&nbsp;&nbsp;SEPTEMBER 30, 2019</h5>
        </div>
        <div className='datepicker input-container'>
          <h5>SELECT A DAY:</h5>
          <Date setDate={props.setDate} />
        </div>
      </div>
    </section>
  )
}

export default TopBar
