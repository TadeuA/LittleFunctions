import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatDate(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let newValue = rawValue.substr(0, 2)

  if (rawValue.length > 2) {
      newValue += '/' + rawValue.substr(2, 2)
  }

  if (rawValue.length > 4) {
      newValue += '/' + rawValue.substr(4, 4)
  }

  return newValue
}