import React, { FC } from 'react'
// import { Button, styled } from '@mui/material'
import { MuiForm } from '@caldwell619/mui-form-generator'

import { Layout } from '@/components'
import { inputs } from './config'

const PointsGoalForm: FC<Props> = () => (
  <Layout>
    <h2>Goal</h2>
    <MuiForm inputs={inputs} />
    {/* <CalculateButton variant='contained' size='large' onClick={onCalculate}>
      Calculate
    </CalculateButton> */}
  </Layout>
)

// const CalculateButton = styled(Button)`
//   width: 100%;
//   margin-top: ${({ theme: { spacing } }) => spacing(3)};
// `

interface Props {
  // onCalculate: () => void
}

export default PointsGoalForm
