export default function formatToBrazilianDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString('pt-BR')
}