export default function formatTimestampToDate(timestamp) {
  let date = new Date(timestamp * 1000)
  return date.toLocaleDateString()
}