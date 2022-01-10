import { FC } from 'react'
import { MuiForm } from '@caldwell619/mui-form-generator'

import { Layout } from '@/components'
import { generateInputs } from './config'
import { useIsMobile } from '@/hooks'

const PointsGoalForm: FC = () => {
  const isMobile = useIsMobile()
  const inputs = generateInputs(isMobile)
  return (
    <Layout>
      <h2>Goal</h2>
      <MuiForm inputs={inputs} />
    </Layout>
  )
}

export default PointsGoalForm
