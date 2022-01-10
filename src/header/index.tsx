import { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'

const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <Typography variant='h6' noWrap sx={{ flexGrow: 1 }} component='div'>
          Slayer Points Calculator
        </Typography>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
