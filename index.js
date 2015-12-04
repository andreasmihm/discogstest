var Discogs = require('disconnect').Client;

var db = new Discogs().database();
db.release(3083053, function(err, data){
    console.log(data);
});
