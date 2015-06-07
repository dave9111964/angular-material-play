/**
 * Created by david on 6/6/15.
 */

var sideNav = function(){
    //require('./sideNav.less');
    return {
        restrict: 'E',
        controller: require('./sideNav.ctrl'),
        controllerAs: 'sideNavCtrl',
        template: require('./sideNav.html')
    };
};

module.exports = sideNav;
