import React from 'react'
import { Grid } from 'semantic-ui-react'
import Card from './Card'

const Grid = (props) => {

  return (
    <section className='grid-section'>
      <h1>Past Photos</h1>
      <Grid>
        <Grid.Row columns={4}>
          <Card />
        </Grid.Row>
      </Grid>
      {/* {arr.map((el) => <Card desc={props.desc} />)} */}
      {/* <img src={props.photo} alt='photo of the day' /> */}
    </section>
  )
}

export default Grid
