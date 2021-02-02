import { PHONE_REGEX } from '../../regex'

export default function isValidPhone(phone) {
  const regex13 = RegExp(PHONE_REGEX)
  return regex13.test(phone)
}