export const slayerMasters: SlayerMaster[] = [
  // {
  //   name: 'Turael / Spira',
  //   pointsPerTask: 0,
  //   pointsPer10thTask: 0,
  //   pointsPer50thTask: 0,
  //   pointsPer100thTask: 0,
  //   pointsPer250thTask: 0,
  //   pointsPer1000thTask: 0
  // },
  {
    name: 'Mazchna',
    pointsPerTask: 2,
    pointsPer10thTask: 5,
    pointsPer50thTask: 15,
    pointsPer100thTask: 50,
    pointsPer250thTask: 70,
    pointsPer1000thTask: 100
  },
  {
    name: 'Vannaka',
    pointsPerTask: 4,
    pointsPer10thTask: 20,
    pointsPer50thTask: 60,
    pointsPer100thTask: 100,
    pointsPer250thTask: 140,
    pointsPer1000thTask: 200
  },
  {
    name: 'Chaeldar',
    pointsPerTask: 10,
    pointsPer10thTask: 50,
    pointsPer50thTask: 150,
    pointsPer100thTask: 250,
    pointsPer250thTask: 350,
    pointsPer1000thTask: 500
  },
  {
    name: 'Nieve / Steve',
    pointsPerTask: 12,
    pointsPer10thTask: 60,
    pointsPer50thTask: 180,
    pointsPer100thTask: 300,
    pointsPer250thTask: 420,
    pointsPer1000thTask: 600,
    diaryModifier: {
      name: 'western',
      amount: 0.25
    }
  },
  {
    name: 'Duradel',
    pointsPerTask: 15,
    pointsPer10thTask: 75,
    pointsPer50thTask: 225,
    pointsPer100thTask: 375,
    pointsPer250thTask: 525,
    pointsPer1000thTask: 750
  },
  {
    name: 'Konar quo Maten',
    pointsPerTask: 18,
    pointsPer10thTask: 90,
    pointsPer50thTask: 180,
    pointsPer100thTask: 450,
    pointsPer250thTask: 630,
    pointsPer1000thTask: 900,
    diaryModifier: {
      name: 'kourend',
      amount: 0.1
    }
  },
  {
    name: 'Krystilia',
    pointsPerTask: 25,
    pointsPer10thTask: 125,
    pointsPer50thTask: 375,
    pointsPer100thTask: 625,
    pointsPer250thTask: 875,
    pointsPer1000thTask: 1250
  }
]

/** Some masters have modifiers that will increase the points per task if the correct diary has been completed */
export interface PointsDiaryModifier {
  name: 'kourend' | 'western'
  amount: number
}

export interface SlayerMaster {
  name: string
  pointsPerTask: number
  pointsPer10thTask: number
  pointsPer50thTask: number
  pointsPer100thTask: number
  pointsPer250thTask: number
  pointsPer1000thTask: number
  diaryModifier?: PointsDiaryModifier
}
