import { FC, useContext } from 'react'
import { MuiFormContext } from '@caldwell619/mui-form-generator'
import { UseFormReturn } from 'react-hook-form'
import { styled, Grid, Card, CardContent, CardHeader } from '@mui/material'

import { BrandColorText } from '@/components'
import { PointsGoals } from '@/features/inputs/config'
import { useCalculateTasks } from './api'

const TaskCount: FC = () => {
  const { getValues } = useContext(MuiFormContext) as UseFormReturn<PointsGoals>

  const { isUsingTuraelBoost } = getValues()
  const tasks = useCalculateTasks()

  const numberOfBonusTasks = [...tasks].reduce<number>((total, current) => {
    if (current.master !== 'Turael') return total + 1
    return total
  }, 0)

  return (
    <Layout sx={{ overflow: { md: 'scroll' }, paddingTop: { md: '60px' }, height: { md: '100vh' } }}>
      <Grid container spacing={2}>
        <Grid item>
          <h2>
            <BrandColorText>{tasks.length}</BrandColorText> Tasks to meet goal
          </h2>
          {isUsingTuraelBoost ? (
            <h4>
              <BrandColorText>{numberOfBonusTasks}</BrandColorText> Point Bonus Tasks
            </h4>
          ) : null}
        </Grid>
        {tasks.map((task, index) => (
          <Grid key={`${task.pointsAwayFromGoal}-${index} `} item xs={12}>
            <Card>
              <CardHeader title={`${index + 1}: ${task.master}`} />
              <CardContent>
                <Grid container>
                  <Grid item xs={3} container flexDirection='column'>
                    <div>Gained</div>
                    <div>{task.pointsGained}</div>
                  </Grid>
                  <Grid item xs={3} container flexDirection='column'>
                    <div>Total</div>
                    <BrandColorText>{task.newTotalAfterCompletion}</BrandColorText>
                  </Grid>
                  <Grid item xs={3} container flexDirection='column'>
                    <div>Streak</div>
                    <div>{task.newStreakAfterCompletion}</div>
                  </Grid>
                  <Grid item xs={3} container flexDirection='column'>
                    <div>Remaining</div>
                    <BrandColorText>{task.pointsAwayFromGoal}</BrandColorText>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

const Layout = styled('div')``

export default TaskCount
