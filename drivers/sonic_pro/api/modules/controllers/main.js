const Commands = require('./commands')
const functions = require('./functions')
const venom = require('../venom/init')
const secret = require('../key/secret')
const webhooks = require("../endpoints/webhooks");
const fs = require('fs')


module.exports = class Main extends Commands {

    static async connect(ctx) {
        let session = ctx.request.headers['session']
        let Notexist = functions.checkUser(session)
        if (!Notexist && ctx.request.headers['token'] == secret) {
            functions.checkAddUser(session)
            functions.addInfoObjects(session, {
                apikey: ctx.request.headers['apikey'],
                wh_status: ctx.request.headers['onack'] == "true" ? ctx.request.body.wh_status : false,
                wh_message: ctx.request.headers['onmessage'] == "true" ? ctx.request.body.wh_message : false,
                wh_message_full: ctx.request.headers['onmessagefull'] == "true" ? ctx.request.body.wh_message_full : false,
                wh_qrcode: ctx.request.body.wh_qrcode,
                wh_connect: ctx.request.body.wh_connect,
                wh_presence: ctx.request.headers['onpresence'] == "true" ? ctx.request.body.wh_presence : false,
                wh_delete: ctx.request.headers['ondelete'] == "true" ? ctx.request.body.wh_delete : false,
                wh_groups: ctx.request.headers['ongroups'] == "true" ? ctx.request.body.wh_groups : false,
                wh_participants: ctx.request.headers['onparticipants'] == "true" ? ctx.request.body.wh_participants : false,
                wh_call: ctx.request.headers['oncall'] == "true" ? ctx.request.body.wh_call : false
            })

            let response = await venom.start(session, ctx)

            functions.addInfoObjects(session, {
                client: response,
            })
            
        } else {
            if(ctx.request.headers['session'] != secret){
                ctx.body = {
                    result: 400,
                    "status": "FAIL"
                }
            }else{
                ctx.body = {
                    result: 401,
                    "status": "UNAUTHORIZED"
                }
            }
        }

    }

    // static async qrcode(ctx){
    //     let data = functions.getUser(ctx.request.headers['session'])
    //     if(data && data.apikey == ctx.request.headers['apikey']){

    //    let object = {
    //     "result": 200,
    //     "qrcode": data.qrcode
    //   }
    //    ctx.body = object
    //     }else{
    //         let object = {
    //             "result": 400,
    //             "status": "FAIL"
    //           }
    //         ctx.body = object
    //     }
    // }


    static async disconnect(ctx) {
        let session = ctx.request.headers['session']
        let Notexist = functions.checkUser(session)
        let data = functions.getUser(session)
        if (Notexist && secret == ctx.request.headers["token"]){
            let response = await venom.stop(session)
            if(response){
             
                    functions.deleteSession(session)
                ctx.body = {
                    "session": session,
                    "status": 200,
                    "type": "CONNECTION",
                    "response": "isDisconnected"
                  }
            }else{
                ctx.body = {
                    "session": session,
                    "status": 404,
                    "type": "CONNECTION",
                    "message:": "Disconnect error"
                  }
            }
        } else {
            ctx.body = {
                "session": session,
                "status": 404,
                "type": "CONNECTION",
                "message:": "Disconnect error"
              }
        }

    }
    static async logout(ctx) {
        let session = ctx.request.headers['session']
        let Notexist = functions.checkUser(session)
        let data = functions.getUser(session)
        if (Notexist && secret == ctx.request.headers["token"]){
            let response = await venom.logout(session)
            if(response){
                setTimeout(() => {
                    functions.deleteSession(session)
                }, 6000);
                
                ctx.body = {
                    "session": session,
                    "status": 200,
                    "type": "CONNECTION",
                    "response": "isLogout"
                  }
            }else{
                ctx.body = {
                    "session": session,
                    "status": 404,
                    "type": "CONNECTION",
                    "message:": "Error Logout"
                  }
            }

        } else {
            ctx.body = {
                "session": session,
                "status": 404,
                "type": "CONNECTION",
                "message:": "Error Logout"
              }
        }

    }

    static async session(ctx) {
        let response = functions.getUser(ctx.params.session)

        console.log(response)

        ctx.body = 'Session Loading'
    }


   
}