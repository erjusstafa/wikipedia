import { Box, LinearProgress } from '@mui/material'
import React, { ReactElement } from 'react'
import "./styles.scss";

function Loading():ReactElement {
  return (
    <Box  className="loading">
    <LinearProgress />
  </Box>
  )
}

export default Loading