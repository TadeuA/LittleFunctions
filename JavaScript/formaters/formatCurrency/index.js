import clearDigitsSpecialChars from "../../parsers/clearDigitsSpecialChars"

export default function formatCurrency(value, minimumFractionDigits = 3) {
  let rawValue = clearDigitsSpecialChars(value);
  let number;

  switch (minimumFractionDigits) {
      case 2:
          number = Number(rawValue) * 0.0001;
          break;
      case 3:
          number = Number(rawValue) * 0.01;
          break;
      case 4:
          number = Number(rawValue) * 0.0001
          break;
      default:
          break;
  }
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits });
}