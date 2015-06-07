/**
 * Created by david on 6/6/15.
 */

'use strict';

function MessageingService(){
    var userSelectedListeners = [];

    return {
        registerUserSelListener: function(funcToListen){
            userSelectedListeners.push(funcToListen);
        },

        dispatchUserSelected: function(user) {
            userSelectedListeners.forEach(function (val) {
                val(user);
            });
        }
    };

}

module.exports = MessageingService;

