import { FC, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

import { ChosenTheme } from './ChosenTheme'

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useContext(ChosenTheme)
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const brandColor = '#f80606'
const createThemeHelper = (theme: 'dark' | 'light') => {
  return createTheme({
    palette: {
      mode: theme,
      primary: {
        main: brandColor
      },
      error: {
        main: 'rgb(252, 211, 76)'
      },
      success: {
        main: 'rgb(76,175,80)'
      }
    }
  })
}
