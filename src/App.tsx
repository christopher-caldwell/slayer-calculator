import { FC, lazy } from 'react'
import { Grid, styled } from '@mui/material'

import Header from '@/header'

const PointsGoalForm = lazy(() => import('@/features/inputs'))
const TaskCount = lazy(() => import('@/features/task-count'))

const App: FC = () => {
  return (
    <Root>
      <Header />
      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <Grid item xs={12} md={4}>
          <PointsGoalForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <TaskCount />
        </Grid>
      </Grid>
    </Root>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
