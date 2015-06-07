/**
 * Created by david on 6/6/15.
 */

var mainContent = function(){
    //require('./mainContent.less');
    return {
        restrict: 'E',
        controller: require('./mainContent.ctrl'),
        controllerAs: 'mainContentCtrl',
        template: require('./mainContent.html')
    };
};

module.exports = mainContent;

