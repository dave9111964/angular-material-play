/**
 * Created by david on 6/6/15.
 */

'use strict';

function MessageingService(){
    var userSelectedListeners = [];
    var selectedUser = null;

    return {
        registerUserSelListener: function(funcToListen){
            userSelectedListeners.push(funcToListen);
        },

        dispatchUserSelected: function(user) {
            selectedUser = user;
            userSelectedListeners.forEach(function (val) {
                val(user);
            });
        },

        getSelectedUser: function(){
            if(selectedUser){
                return selectedUser;
            }else{
                return false;
            }
        },

        setSelectedUser: function(user){
            if(user){
                selectedUser = user;
            }
        }
    };

}

module.exports = MessageingService;

