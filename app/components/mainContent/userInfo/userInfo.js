/**
 * Created by david on 6/8/15.
 */

var userInfo = function(){
    //require('./userInfo.less');
    return {
        restrict: 'E',
        controller: require('./userInfo.ctrl'),
        controllerAs: 'userInfoCtrl',
        template: require('./userInfo.html')
    };
};

module.exports = userInfo;


