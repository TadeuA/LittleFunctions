export default function formatAmericanToBrazilianDate(value) {
  if (!value) return '';

  let date = value.split('T')[0];
  let day = date.split('-')[2]
  let month = date.split('-')[1]
  let year = date.split('-')[0]

  let newValue = `${day}/${month}/${year}`;

  return newValue
}
