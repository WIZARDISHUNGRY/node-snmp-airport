var SnmpAirport = function (ipAddress) {
  this.ipAddress = ipAddress;
};

var exec = require('child_process').exec;
SnmpAirport.prototype.getClients = function (callback) {
  var snmpWalk = `snmpwalk -Os -v 2c -c public ${this.ipAddress} atPhysAddress`;
  exec(snmpWalk, [], (err, stdout, stderr) => {
    if (err instanceof Error)
      throw err;
    var lines = stdout.split("\n");
    var hash = [];
    lines.forEach((line) => {
      if(line)
        hash[line.match(/^atPhysAddress((\.\d+){2})\.([\d\.]*) /)[3]] = line.match(/ = Hex-STRING: (.*)$/)[1].trim();
    });
    callback(hash);
  });
  return this;
};
module.exports = SnmpAirport;
