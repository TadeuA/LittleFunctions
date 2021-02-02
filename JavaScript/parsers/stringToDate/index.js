import clearDigitsSpecialChars from '../clearDigitsSpecialChars'
import isNotEmpty from '../../checks/isNotEmpty'

export default function stringToDate(value) {
  let rawValue = clearDigitsSpecialChars(value)
  if (isNotEmpty(rawValue)) {
      let day = rawValue.substr(0, 2)
      let month = rawValue.substr(2, 2)
      let year = rawValue.substr(4, 4)
      return new Date(year + "-" + month + "-" + day + " 23:59:59 GMT-03:00")
  }

  return null
}