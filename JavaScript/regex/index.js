const NAME_PATTERN = "[a-zA-ZÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑáàâãäéèêëíìîïóòôõöúùûüçñ'-.]"
const COMPANY_NAME_PATTERN = "[a-zA-Z0-9ÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑáàâãäéèêëíìîïóòôõöúùûüçñ'-.]"

export const FULL_NAME_REGEX = '^' + NAME_PATTERN + '+\\s(?:' + NAME_PATTERN + '{1,}\\s*){1,}$'
export const CEP_REGEX = "^([0-9]{8})$"
export const DECIMAL_REGEX = '\\d{1,},\\d{2}'
export const EMAIL_REGEX = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}"
export const PASSWORD_REGEX = ".+"
export const PHONE_REGEX = "^([0-9]{10,11})$"
export const ID_PAGINA_SITE_REGEX = "^([A-Z0-9a-z\\-_]{1,})$"
export const ANY_NON_DIGIT_REGEX= /[^0-9]/g
export const COMPANY_NAME_REGEX = '^' + COMPANY_NAME_PATTERN + '+\\s(?:' + COMPANY_NAME_PATTERN + '{1,}\\s*){1,}$'