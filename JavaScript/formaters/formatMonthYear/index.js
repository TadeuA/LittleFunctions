import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatMonthYear(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let newValue = rawValue.substr(0, 2)

  if (rawValue.length > 2) {
      newValue += '/' + rawValue.substr(2, 4)
  }

  return newValue
}