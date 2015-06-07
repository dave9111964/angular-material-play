/**
 * Created by david on 6/6/15.
 */

'use strict';

function SideNavCtrl( userService, MessagingService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.users        = [ ];
    self.toggleList   = toggleUsersList;
    self.selectUser = selectUser;

    userService
        .loadAllUsers()
        .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
        });

    function selectUser ( user ) {
        self.selected = angular.isNumber(user) ? self.users[user] : user;
        self.toggleList();
        MessagingService.dispatchUserSelected(self.selected);
    }

    function toggleUsersList() {
        var pending = $mdBottomSheet.hide() || $q.when(true);

        pending.then(function(){
            $mdSidenav('left').toggle();
        });
    }


}

module.exports = SideNavCtrl;
