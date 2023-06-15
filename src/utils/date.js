const format = (date, short = false) => {

  if (short) {
    date = new Date(date)
    const month = date.toLocaleDateString(undefined, {
      month: 'short',
    })
    const day = date.toLocaleDateString(undefined, {
      day: 'numeric',
    })
    return { day, month }
  }

  return new Date(date).toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })
}

function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber - 1)

  return date.toLocaleString('en-US', { month: 'short' })
}

export default {
  format,
  getMonthName
}
