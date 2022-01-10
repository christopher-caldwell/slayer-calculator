import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { MuiFormProvider } from '@caldwell619/mui-form-generator'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'
import { CircularProgress } from '@mui/material'

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <Suspense fallback={<CircularProgress />}>
          <MuiFormProvider props={{}}>
            <App />
          </MuiFormProvider>
        </Suspense>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
