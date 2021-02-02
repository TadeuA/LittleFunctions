import { CEP_REGEX } from '../../regex'

export default function isValidCep(phone) {
  const regex = RegExp(CEP_REGEX)
  return regex.test(phone)
}