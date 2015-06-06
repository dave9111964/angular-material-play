/**
 * Created by david on 6/6/15.
 */


module.exports = angular.module('starterApp.services', [])
    .service('userService', ['$q', require('./users/UserService')]);


