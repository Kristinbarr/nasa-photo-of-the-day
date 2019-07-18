import React from "react";
import Menu from './Menu'
import ApodSection from './ApodMain/ApodSection'

import "./index.css";

function App() {
  return (
    <div className='App'>
      <Menu />
      <ApodSection />
      <div className='apod-grid'>
        <p>Future section for previous APoDs</p>
        {/* <ApodGrid limit={20} /> */}
      </div>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label="spaceship">🚀</span>!
      </p> */}
    </div>
  )
}

export default App;
