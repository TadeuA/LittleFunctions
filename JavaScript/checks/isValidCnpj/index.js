import { clearDigitsSpecialChars } from '../../parsers'

export default function isValidCnpj(cnpj) {
  let clearCNPJ = clearDigitsSpecialChars(cnpj);

  const b = [6,5,4,3,2,9,8,7,6,5,4,3,2];

  if((clearCNPJ = clearCNPJ.replace(/[^\d]/g,"")).length !== 14)
      return false;

  if(/0{14}/.test(clearCNPJ))
      return false;

  for (var i = 0, n = 0; i < 12; n += clearCNPJ[i] * b[++i]);
  if(clearCNPJ[12] !== (((n %= 11) < 2) ? 0 : 11 - n))
      return false;

  for (var j = 0, m = 0; j <= 12; m += clearCNPJ[j] * b[j++]);
  if(clearCNPJ[13] !== (((m %= 11) < 2) ? 0 : 11 - m))
      return false;

  return true;
};