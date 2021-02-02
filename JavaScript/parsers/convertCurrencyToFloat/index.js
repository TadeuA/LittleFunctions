export default function convertCurrencyToFloat(value) {
  if (value) {    
      
      let formatToFloat = value.replace(".","")
      formatToFloat = formatToFloat.replace("R","")
      formatToFloat = formatToFloat.replace("$","")
      formatToFloat = formatToFloat.trim()
      const theFloat = Number(formatToFloat.replace(",","."))
      return theFloat;
  }

  return ""
}