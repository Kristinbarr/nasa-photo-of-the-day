import React from 'react'
import { Button } from 'semantic-ui-react'
let parsedTitle = ''

const Buttons = (props) => {
  // console.log('props',props.data)
    parsedTitle = props.data.title
    // parsedTitle.replace(/\s+/g, '-').toLowerCase();
    // console.log('parsed',parsedTitle)

  return (
    <>
      <Button>
        <a href='https://www.nasa.gov/image-feature/' >VIEW IMAGE FEATURE</a>
      </Button>
      <button>
        <a href={props.data.url} download>VIEW FULL IMAGE</a>
      </button>
    </>
  )
}

export default Buttons
