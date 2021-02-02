import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatDecimal2(value) {
  let rawValue = clearDigitsSpecialChars(value)
  let number = Number(rawValue) * 0.01
  number = number.toLocaleString('en-us', { 'minimumFractionDigits': 2 });
  
  return number.replace(/,/g, '')
}