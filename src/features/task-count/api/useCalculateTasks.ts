import { useContext } from 'react'
import { useWatch } from 'react-hook-form'
import { MuiFormContext } from '@caldwell619/mui-form-generator'
import { UseFormReturn } from 'react-hook-form'

import { PointsGoals } from '@/features/inputs/config'
import { SlayerMaster, slayerMasters } from '@/constants'

export const useCalculateTasks = (): Task[] => {
  const { control } = useContext(MuiFormContext) as UseFormReturn<PointsGoals>

  const {
    chosenMaster,
    currentPoints,
    currentStreak = 0,
    targetPoints,
    hasCompletedKourendDiary = false,
    hasCompletedWesternDiary = false,
    isUsingTuraelBoost
  } = useWatch({ control })
  console.log('current points', currentPoints)

  console.log('isUsingTuraelBoost', isUsingTuraelBoost)

  if (!chosenMaster || !currentPoints || !targetPoints) return []

  const targetSlayerMaster = slayerMasters.find(({ name }) => chosenMaster === name)
  if (!targetSlayerMaster) throw new Error('[useCalculateTasks]: Cannot find slayer master')

  if (isUsingTuraelBoost)
    return handleTuraelBoost(
      targetSlayerMaster,
      Number(currentPoints),
      Number(currentStreak),
      Number(targetPoints),
      hasCompletedKourendDiary,
      hasCompletedWesternDiary
    )

  return handleCalculateTasks(
    targetSlayerMaster,
    Number(currentPoints),
    Number(currentStreak),
    Number(targetPoints),
    hasCompletedKourendDiary,
    hasCompletedWesternDiary
  )
}

const handleTuraelBoost = (
  slayerMaster: SlayerMaster,
  currentPoints: number,
  currentStreak: number,
  targetPoints: number,
  hasCompletedKourendDiary: boolean,
  hasCompletedWesternDiary: boolean
) => {
  const tasks: Task[] = []

  let mutablePoints = currentPoints
  let mutableStreak = currentStreak
  const westernDiaryMultiplier =
    hasCompletedWesternDiary && slayerMaster.diaryModifier?.name === 'western'
      ? slayerMaster.diaryModifier.amount
      : undefined
  const kourendDiaryMultiplier =
    hasCompletedKourendDiary && slayerMaster.diaryModifier?.name === 'kourend'
      ? slayerMaster.diaryModifier.amount
      : undefined

  const diaryModifier = westernDiaryMultiplier || kourendDiaryMultiplier || 0

  while (mutablePoints <= targetPoints) {
    let pointsGained = 0
    mutableStreak++
    if (mutableStreak % 10 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer10thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 50 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer50thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 100 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer100thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 250 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer250thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 1000 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer1000thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    }

    tasks.push({
      pointsGained,
      newTotalAfterCompletion: mutablePoints,
      newStreakAfterCompletion: mutableStreak,
      pointsAwayFromGoal: targetPoints - mutablePoints < 0 ? 0 : targetPoints - mutablePoints,
      master: pointsGained === 0 ? 'Turael' : slayerMaster.name
    })
  }

  return tasks
}

const handleDiaryModifier = (basePoints: number, modifier: number) => basePoints + basePoints * modifier

const handleCalculateTasks = (
  slayerMaster: SlayerMaster,
  currentPoints: number,
  currentStreak: number,
  targetPoints: number,
  hasCompletedKourendDiary: boolean,
  hasCompletedWesternDiary: boolean
) => {
  const tasks: Task[] = []

  let mutablePoints = currentPoints
  let mutableStreak = currentStreak
  const westernDiaryMultiplier =
    hasCompletedWesternDiary && slayerMaster.diaryModifier?.name === 'western'
      ? slayerMaster.diaryModifier.amount
      : undefined
  const kourendDiaryMultiplier =
    hasCompletedKourendDiary && slayerMaster.diaryModifier?.name === 'kourend'
      ? slayerMaster.diaryModifier.amount
      : undefined

  const diaryModifier = westernDiaryMultiplier || kourendDiaryMultiplier || 0

  while (mutablePoints <= targetPoints) {
    let pointsGained = 0
    mutableStreak++
    if (mutableStreak % 10 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer10thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 50 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer50thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 100 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer100thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 250 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer250thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else if (mutableStreak % 1000 === 0) {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPer1000thTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    } else {
      const pointsToAdd = handleDiaryModifier(slayerMaster.pointsPerTask, diaryModifier)
      mutablePoints += pointsToAdd
      pointsGained = pointsToAdd
    }

    tasks.push({
      pointsGained,
      newTotalAfterCompletion: mutablePoints,
      newStreakAfterCompletion: mutableStreak,
      pointsAwayFromGoal: targetPoints - mutablePoints < 0 ? 0 : targetPoints - mutablePoints,
      master: slayerMaster.name
    })
  }

  return tasks
}

interface Task {
  pointsGained: number
  newTotalAfterCompletion: number
  newStreakAfterCompletion: number
  pointsAwayFromGoal: number
  master: string
}
