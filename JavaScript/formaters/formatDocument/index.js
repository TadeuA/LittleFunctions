import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"
import formatCnpj from '../formatCnpj'
import formatCpf from '../formatCpf'

export default function formatDocument(value) {
  if (!value) return '';
  value = clearDigitsSpecialChars(value)

  if (value.length >= 12) {
      return formatCnpj(value)
  }

  return formatCpf(value)
}