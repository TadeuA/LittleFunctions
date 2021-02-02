import { FULL_NAME_REGEX } from '../../regex/index'

export default function isValidName(name) {
  const nameRegex = RegExp(FULL_NAME_REGEX)
  return nameRegex.test(name)
}