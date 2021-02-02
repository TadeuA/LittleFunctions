export default function formatEstadoCivil(value) {
  if (!value) return "Solteiro";

  if (typeof (value) !== "number") value = parseInt(value, 0);

  switch (value) {
      case 1:
          return "Solteiro"
      case 2:
          return "Casado"
      case 3:
          return "União Estável"
      case 4:
          return "Divorciado"
      case 5:
          return "Viúvo"
      default:
          return "Solteiro";
  }
}