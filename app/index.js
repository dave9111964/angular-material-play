/**
 * Created by david on 6/5/15.
 */

(function() {

    'use strict';
    require('./vendor')();

    angular
        .module('starterApp', ['ngMaterial',
            require('./services/services').name,
            require('./components/components').name
        ])
        .config(function($mdThemingProvider, $mdIconProvider){
            $mdIconProvider
                .defaultIconSet("assets/svg/avatars.svg", 128)
                .icon("menu"       , "./assets/svg/menu.svg", 24)
                .icon("share"      , "./assets/svg/share.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg", 512)
                .icon("hangouts"   , "./assets/svg/hangouts.svg", 512)
                .icon("twitter"    , "./assets/svg/twitter.svg", 512)
                .icon("phone"      , "./assets/svg/phone.svg", 512);

            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red');

        })
        .run(function($log){
            $log.debug("startApp running");
        });

    angular.element(document).ready(function(){
        angular.bootstrap(document.getElementById("ngapp"), ["starterApp"]);
    });

})();
