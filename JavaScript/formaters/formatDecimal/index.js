import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatDecimal(value) {
  var rawValue = clearDigitsSpecialChars(value)
  var number = Number(rawValue) * 0.01
  return number.toLocaleString('pt-BR', { 'minimumFractionDigits': 2 });
}