/**
 * @param {*} probes 
 */
 var arrayProbes = [
    {macs: "C4:29:E5:0A:09:88", radio: "Rd 1"},
    {macs: "28:A2:04:82:70:9A", radio: "Rd 1"},
    {macs: "F8:AE:80:0A:BB:17", radio: "Rd 1"},
    {macs: "C4:29:E5:0A:09:88", radio: "Rd 2"},
    {macs: "28:A2:04:82:70:9A", radio: "Rd 2"},
    {macs: "F8:AE:80:0A:BB:17", radio: "Rd 3"},
    {macs: "F0:81:2D:E9:C7:64", radio: "Rd 3"},
    {macs: "28:A2:04:82:70:9A", radio: "Rd 4"}]
  
  var radioMacs = arrayProbes.map(macsByRadio);
  console.log(radioMacs);
  
  function macsByRadio(probes){
    let item = { };
    item.radio = probes.radio;
    item.macs = probes.macs;
    return item;
    
  }

  module.exports = { macsByRadio };