const superchats = require("sonic-pro");
require("dotenv").config();
const license = process.env.LICENSE
const functions = require("../controllers/functions");
const events = require("../lives/events");
const webhooks = require("../endpoints/webhooks");
const fs = require("fs")

module.exports = class Venom {
  static async start(session, ctx) {
    const data = functions.getUser(session);

    try {
      const client = await superchats.create(
        {
          session: session,
          license: license,
          decryptUrl: process.env.DECRYPT ? process.env.DECRYPT : undefined,
          nodata: ctx.request.headers['nodata'] != 'true' ||  !ctx.request.headers['nodata'] ? false : true,
          statusFind: (status) => {
            functions.addInfoObjects(session, {
              status: status,
            });
            
            webhooks.wh_connect(session, status);
          },
          qrcode: (base64Qrimg, asciiQR, urlCode) => {
            setTimeout(() => {
                webhooks.wh_qrcode(session, base64Qrimg, urlCode);
                functions.addInfoObjects(session, {
                  qrcode: base64Qrimg,
                });
            }, 1000);
             
          },
          onMessage: (message) => {events.onMessage(session, message)},
          onMessageFull: (message) => {events.onMessageFull(session, message)},
          onAck: (message) => {events.onAck(session, message)},
          onPresence: (message) => {events.onPresence(session, message)},
          onGroups: (message) => {events.onGroups(session, message)},
          onParticipants: (message) => {events.onParticipants(session, message)},
          onDelete: (message) => {events.onDelete(session, message)},
          onCall: (message) => {events.onCall(session, message)},
        },
      );

      let status = {
        session: session,
        event: "status-find",
        status: 200,
        type: "CONNECTION",
        response: 'isNodeExit',
      };

      process.on('SIGINT', function() {
        webhooks.wh_connect(session, status);
        setTimeout(() => {
        process.exit(0)
        }, 6000);
     });

      process.on('SIGTERM', function() {
        webhooks.wh_connect(session, status);
        setTimeout(() => {
        process.exit(0)
        }, 6000);
     });

      process.on('unhandledRejection', function() {
        webhooks.wh_connect(session, status);
        setTimeout(() => {
        process.exit(0)
        }, 6000);
     });

     
      functions.addInfoObjects(session, {
        client: client,
      });

      return client;
    } catch (error) {
      console.log(error);
    }
  }

  static async stop(session) {
    let data = functions.getUser(session);

    data.client.close();
  
      return true;

  }
  static async logout(session) {
    let data = functions.getUser(session);
    let response = data.client.logout();
    if (response) {
      return true;
    }
    return false;
  }
};
