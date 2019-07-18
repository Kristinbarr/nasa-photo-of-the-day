import React from 'react'

const Buttons = (props) => {
  // console.log('props',props.data.desc.url)
  console.log('props',props.data.url)
  return (
    <>
      <button>
        <a href={props}>View Image Feature</a>
      </button>
      <button>
        <a href={props.data.url} download>Download Image</a>
      </button>
    </>
  )
}

export default Buttons
