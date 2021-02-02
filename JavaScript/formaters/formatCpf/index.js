import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatCpf(value) {
  let rawValue = clearDigitsSpecialChars(value)

  let newValue = rawValue.substr(0, 3)

  if (rawValue.length > 3) {
      newValue += '.' + rawValue.substr(3, 3)
  }

  if (rawValue.length > 6) {
      newValue += '.' + rawValue.substr(6, 3)
  }

  if (rawValue.length > 9) {
      newValue += '-' + rawValue.substr(9, 2)
  }

  return newValue
}