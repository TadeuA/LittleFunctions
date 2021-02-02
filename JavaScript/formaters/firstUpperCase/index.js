export default function firstUpperCase(value) {
  if (value) {
      let firsLetter = value[0].toUpperCase();

      return firsLetter + value.substr(1);
  }

  return value;
}