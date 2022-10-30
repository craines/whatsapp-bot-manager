
const fs = require('fs');
const mime = require('mime-types');
const MD5 = require("crypto-js/md5");
const webhooks = require('../endpoints/webhooks')
var dir = 'files/'
module.exports = class Events {

    static async onMessage(session, message) {
       
         await webhooks.wh_messages(session, message)

    }
    static async onMessageFull(session, message) {
       
         await webhooks.wh_messages_full(session, message)

    }

    static async onPresence(session, message) {

      await webhooks.wh_presence(session, message)

    }

    static async onBattery(session, message) {

         await webhooks.wh_battery(session, message)

    }

    static async onGroups(session, message) {

        await webhooks.wh_groups(session, message)

        
    }

    static async onParticipants(session, message) {

     await webhooks.wh_participants(session, message)

    }

    static async onDelete(session, message) {

         await webhooks.wh_delete(session, message)

    }

    static async onCall(session, message) {

         await webhooks.wh_call(session, message)

    }

    static async onAck(session, message) {

              await webhooks.wh_status(session, message)
    }


}