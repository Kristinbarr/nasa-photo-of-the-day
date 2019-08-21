import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const Date = (props) => {
  const [startDate, setStartDate] = useState('')

  return (
    <DatePicker selected={startDate}
    onChange={e => {
      setStartDate(e)
      props.setDate(e)
    }} />
  )
}

export default Date

// import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     // paddingRight: theme.spacing(1),
//     width: 150,
//     // border: '1px solid white'
//   }
// }))

// export default function DatePickers() {
//   const classes = useStyles()

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id='date'
//         // label='SELECT A DAY'
//         type='date'
//         defaultValue='2017-05-24'
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true
//         }}
//       />
//     </form>
//   )
// }
