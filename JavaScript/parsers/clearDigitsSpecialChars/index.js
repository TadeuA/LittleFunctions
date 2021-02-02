import { ANY_NON_DIGIT_REGEX } from '../../../regex/index'

export default function clearDigitsSpecialChars(value) {
  if (value) {
      return value.toString().replace(ANY_NON_DIGIT_REGEX, '')
  }

  return ""
}