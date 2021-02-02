import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatCnpj(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let newValue = rawValue.substr(0, 2)

  if (rawValue.length > 2) {
      newValue += '.' + rawValue.substr(2, 3)
  }

  if (rawValue.length > 5) {
      newValue += '.' + rawValue.substr(5, 3)
  }

  if (rawValue.length > 8) {
      newValue += '/' + rawValue.substr(8, 4)
  }

  if (rawValue.length > 12) {
      newValue += '-' + rawValue.substr(12, 2)
  }

  return newValue
}