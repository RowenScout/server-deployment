'use strict';

const server = require(__dirname + '/server');
server.listen(process.env.PORT || 3000);
console.log('server started on port ' + process.env.PORT || 3000);
