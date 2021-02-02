export default function convertSpecialChars(value = "") {
  return value
          .replace('+', '%2B')
          .replace('-', '%2D')
          .replace('/', '%2F')
          .replace('.','%2E')
          .replace('(', '%28')
          .replace(')', '%29')
}