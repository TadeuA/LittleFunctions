import { COMPANY_NAME_REGEX } from '../../regex'

export default function isValidCompanyName(name) {
  const nameRegex = RegExp(COMPANY_NAME_REGEX)
  return nameRegex.test(name)
}
