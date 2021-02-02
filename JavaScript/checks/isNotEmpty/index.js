export default function isNotEmpty(value) {
  if (!value) {
      return false
  }

  if (value.trim().length === 0) {
      return false
  }

  return true
}