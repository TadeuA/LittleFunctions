import { EMAIL_REGEX } from '../../regex'

export default function isValidEmail(email) {
  const emailRegex = RegExp(EMAIL_REGEX)
  return emailRegex.test(email)
}
