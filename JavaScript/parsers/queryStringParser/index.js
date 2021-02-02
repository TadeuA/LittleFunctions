export default function queryStringParser(value) {
  let result= {}

  var items = decodeURI(value).slice(1).split("&")
  for (let item of items) {
      let [key, value] = item.split("=")
      result[key] = value
  }

  return result;
}