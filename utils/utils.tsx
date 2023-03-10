export function convertDate(timestamp: EpochTimeStamp) {
  const isoDate: Date = new Date(timestamp * 1000)
  const day: string | number = isoDate.getUTCDate() > 9 ? isoDate.getUTCDate() : `0${isoDate.getUTCDate()}`
  const month: string | number =  (isoDate.getMonth() +1) > 9 ? (isoDate.getMonth() +1) : `0${isoDate.getMonth() +1}`
  return `
    ${day}.
    ${month}.
    ${isoDate.getFullYear()}
    `
}