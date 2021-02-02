import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatIntegerToCurrency(value, currency = 'BRL') {
  let rawValue = clearDigitsSpecialChars(value);
  let number = Number(rawValue) * 0.01;
  const currencyValue = number.toLocaleString("pt-BR", { style: 'currency', currency });
  return currencyValue
}