/**
 * Created by david on 6/5/15.
 */

module.exports = angular.module('starterApp.components', [])
    .directive('amSideNav', require('./sideNav/sideNav'))
    .directive('amMainContent', require('./mainContent/mainContent'));

