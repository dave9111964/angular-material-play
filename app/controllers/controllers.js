/**
 * Created by david on 6/6/15.
 */


module.exports = angular.module('starterApp.controllers', [])
    .controller('UserController', ['userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', require('./users/users.ctrl.js')]);


