export default function formatToAmericanDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString('en-US')
}