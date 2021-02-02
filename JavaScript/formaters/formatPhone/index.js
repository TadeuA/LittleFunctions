import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatPhone(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let front = 4
  if (rawValue.length > 10) {
      front = 5
  }

  let newValue = ''
  if (rawValue.length > 0) {
      newValue += '(' + rawValue.substr(0, 2)
  }

  if (rawValue.length > 2) {
      newValue += ') ' + rawValue.substr(2, front)
  }

  if (rawValue.length >= 7) {
      newValue += '-' + rawValue.substr(front + 2, 4)
  }

  return newValue
}