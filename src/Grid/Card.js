import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Card = (props) => {
  return (
    <div className='grid-card'>
      {/* map through data and create new cards*/}
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </div>
  )
}

export default Card
