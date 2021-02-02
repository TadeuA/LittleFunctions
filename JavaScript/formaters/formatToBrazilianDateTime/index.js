export default function formatToBrazilianDateTime(value) {
  const date = new Date(value);

  const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  return `${date.toLocaleDateString('pt-br', 'short')} ${time}`
}