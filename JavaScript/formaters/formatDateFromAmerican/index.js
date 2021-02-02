export default function formatDateFromAmerican(value) {
  if (!value) return '';

  let date = value.split('T')[0];
  let day = date.split('-')[1]
  let month = date.split('-')[2]
  let year = date.split('-')[0]

  let newValue = `${day}/${month}/${year}`;

  return newValue
}