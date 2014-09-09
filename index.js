'use strict';

module.exports = function(str) {
    return "module.exports = '" + str.replace(/'/g, "\\'").replace(/\r\n|\r|\n/g, "\\n") + "';";
};