/**
 * Created by david on 6/6/15.
 */

'use strict';

function mainContentCtrl(userService, MessagingService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected = null;
    self.users = [];
    //self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.showContactOptions = showContactOptions;


    MessagingService.registerUserSelListener(userSelected);

    userService
        .loadAllUsers()
        .then(function (users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

    function userSelected(user){
        self.selected = user;
    }

    function toggleUsersList() {
        var pending = $mdBottomSheet.hide() || $q.when(true);

        pending.then(function(){
            $mdSidenav('left').toggle();
        });
    }

    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            template: require('./contactSheet.html'),
            controller: [ '$mdBottomSheet', ContactPanelController],
            controllerAs: "cp",
            bindToController : true,
            targetEvent: $event
        }).then(function(clickedItem) {
            clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        function ContactPanelController( $mdBottomSheet ) {
            this.user = user;
            this.actions = [
                { name: 'Phone'       , icon: 'phone'       , icon_url: './assets/svg/phone.svg'},
                { name: 'Twitter'     , icon: 'twitter'     , icon_url: './assets/svg/twitter.svg'},
                { name: 'Google+'     , icon: 'google_plus' , icon_url: './assets/svg/google_plus.svg'},
                { name: 'Hangout'     , icon: 'hangouts'    , icon_url: './assets/svg/hangouts.svg'}
            ];
            this.submitContact = function(action) {
                $mdBottomSheet.hide(action);
            };
        }
    }

}

module.exports = mainContentCtrl;

