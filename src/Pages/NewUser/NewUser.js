import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./NewUser.css"


function NewUser() {
  console.log("Hello");
  return (
    <div className="newUserContainer">
      <h3 className="chart__title">Add New User</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Firts Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Age" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Occpation" variant="outlined" />
        <TextField id="outlined-basic" label="$ Deposit" variant="outlined" />
      </Box>
    </div>
  )
}
export default NewUser