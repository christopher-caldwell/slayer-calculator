import { Config, SelectOption } from '@caldwell619/mui-form-generator'

import { slayerMasters } from '@/constants'

const slayerMastersAsOptions: SelectOption[] = slayerMasters.map(({ name }) => ({ label: name, value: name }))

export const generateInputs = (isMobile: boolean): Config<PointsGoals>[] => [
  {
    type: 'text',
    config: {
      textFieldProps: { type: 'tel' },
      control: {
        name: 'currentPoints',
        label: 'Current Points',
        rules: {
          pattern: /[0-9]/,
          required: true
        }
      }
    }
  },
  {
    type: 'text',
    config: {
      textFieldProps: { type: 'tel' },
      control: {
        name: 'targetPoints',
        label: 'Target Points',
        rules: {
          pattern: /[0-9]/,
          required: true
        }
      }
    }
  },
  {
    type: 'text',
    config: {
      textFieldProps: { type: 'tel' },
      control: {
        name: 'currentStreak',
        label: 'Current Task Streak',
        rules: {
          pattern: /[0-9]/,
          required: true
        }
      }
    }
  },
  {
    type: 'select',
    config: {
      control: {
        name: 'chosenMaster',
        label: 'Slayer Master'
      },
      options: slayerMastersAsOptions
    }
  },
  {
    type: 'switch',
    config: {
      control: {
        gridProps: {
          xs: 6
        },
        name: 'hasCompletedWesternDiary',
        label: 'Western Elite'
      }
    }
  },
  {
    type: 'switch',
    config: {
      control: {
        gridProps: {
          xs: 6
        },
        name: 'hasCompletedKourendDiary',
        label: 'Kourend Elite'
      }
    }
  },
  {
    type: 'switch',
    config: {
      control: {
        name: 'isUsingTuraelBoost',
        label: 'Turael Boost'
      },
      helperText: 'Do 9 tasks for Turael and bonus with other master'
    }
  }
]

export interface PointsGoals {
  currentPoints: number
  targetPoints: number
  currentStreak: number
  chosenMaster: string
  hasCompletedWesternDiary: boolean
  hasCompletedKourendDiary: boolean
  isUsingTuraelBoost: boolean
}
