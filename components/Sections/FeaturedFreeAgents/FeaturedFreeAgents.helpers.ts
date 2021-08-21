function getMonday(d: Date): Date {
  d = new Date(d)
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
  return new Date(d.setDate(diff))
}

export function getCurrentWeeksMonday(date: Date): string {
  const currentWeekMonday = getMonday(date)
  return `${currentWeekMonday.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  })}`
}
