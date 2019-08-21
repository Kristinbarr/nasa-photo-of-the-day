import React from 'react'
// import { Button } from 'semantic-ui-react'
// import styled from 'styled-components'
import Button from './Button'

// let featureTitle = 'https://www.nasa.gov/image-feature/'

const Buttons = (props) => {
    let featureTitle = `https://www.nasa.gov/image-feature/${
      props.data.title
    }`.replace(/\s+/g, '-').toLowerCase()

  return (
    <>
      <form action={featureTitle} target='_blank'>
        <Button>VIEW IMAGE FEATURE</Button>
      </form>
      <form action={props.data.url} download target='_blank'>
        <Button>VIEW FULL IMAGE</Button>
      </form>
    </>
  )
}

export default Buttons
