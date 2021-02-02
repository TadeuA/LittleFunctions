import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatDateToAmerican2(value) {
  let rawValue = clearDigitsSpecialChars(value);

  let newValue = '';

  if (rawValue.length > 4) {
      newValue = rawValue.substr(4, 4)
  }

  if (rawValue.length > 6) {
      newValue += '-' + rawValue.substr(2, 2)
  }

  if (rawValue.length > 4) {
      newValue += '-' + rawValue.substr(0, 2) //rawValue.substr(0, 4)
  }

  return newValue
}