const units = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
} as const

// I love autocomplete from TypeScript

type Keys = keyof typeof units
type Values = typeof units[Keys]
type Interable = [Keys, Values][]

const getSecondsDiff = (timestamp: number) => {
  return (Date.now() - timestamp) / 1000
}

const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(units) as Interable) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1

      return {
        unit,
        value,
      }
    }
  }
}

export const getTimeAgo = ({
  date,
  opts,
}: {
  date: Date
  opts?: Intl.RelativeTimeFormatOptions
}) => {
  const rtf = new Intl.RelativeTimeFormat('es', opts)
  const secondsElapsed = getSecondsDiff(date.getTime())
  const { value, unit } = getUnitAndValueDate(secondsElapsed) as NonNullable<
    ReturnType<typeof getUnitAndValueDate>
  >

  return rtf.format(value, unit)
}
