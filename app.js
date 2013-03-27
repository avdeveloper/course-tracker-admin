var connect = require('connect'),
    port = process.env.PORT || 8080;

connect.createServer(
  connect.static(__dirname)
).listen(port);
