/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
export default function clearTel(tel) {
  if (tel[0] === '+') {
    return tel.split(/\s+|[\)\(-]/).join('');
  }

  return tel
    .split(/^\d+/)
    .join(`+${+tel.match(/^\d+/)[0] - 1}`)
    .split(/\s+|[\)\(-]/)
    .join('');
}
