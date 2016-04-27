# node-snmp-airport

Real simple `snmpwalk` wrapper for retrieving Airport clients in Node.

Swiped from [this php script](https://github.com/nickwest/network-monitor).

```js
var Airport = require("./index.js");
var a = new Airport("192.168.23.1");
a.getClients( (clients) => { console.log(clients);} );
```
```
  > [ '24.184.136.1': '00 07 7D 2E CB D9',
      '192.168.23.2': 'C8 BC C8 B8 9E 9C',
      '192.168.23.5': '00 26 B0 ED 05 6E',
      '192.168.23.6': '70 14 A6 06 00 E5',
      '192.168.23.7': '04 0C CE E2 E4 A2',
      '192.168.23.8': '08 86 3B 6C 57 C1',
      '192.168.23.16': '08 86 3B 6C BB C5' ]
```
