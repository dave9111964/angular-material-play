/**
 * Created by david on 6/5/15.
 */

var vendors = function(){
    //require('./index.less');
    require("../node_modules/bootstrap-webpack/bootstrap.config.js");
    require("../node_modules/angular-material/angular-material.css");
    require('../node_modules/angular');
    require('../node_modules/angular-animate');
    require('../node_modules/angular-aria');
    require('../node_modules/angular-material');
    require('../node_modules/angular-ui-router');
};

module.exports = vendors;


