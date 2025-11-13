var requirejs = require('requirejs');

requirejs(['./amd'], function(math) {
    console.log(math.add(4, 5));
});
