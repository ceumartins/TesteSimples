/**
 * @param {*} probes 
 */

const probes = require("./probes.json")
  
const macsByRadio = (probes) => {
    if (!probes) return []

const radioValue = new Set()
for (const item of probes) {
  radioValue.add(item.radio)
}
const arrayRadio = [...radioValue.values()]
const result = []

for (const item1 of arrayRadio) {
  const macs = []
  for (const itemBase of probes) {
    if (itemBase.radio === item1) {
      macs.push(itemBase.mac)
    }
  }
  result.push({
    radio: item1,
    macs
  })
}
return result
}
  module.exports = { macsByRadio };