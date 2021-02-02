import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatCep(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let newValue = rawValue.substr(0, 2)

  if (rawValue.length > 2) {
      newValue += '.' + rawValue.substr(2, 3)
  }

  if (rawValue.length > 5) {
      newValue += '-' + rawValue.substr(5, 3)
  }

  return newValue
}