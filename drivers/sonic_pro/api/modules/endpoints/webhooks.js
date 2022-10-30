const functions = require('../controllers/functions')
const superagent = require('superagent');
require('superagent-queue');

module.exports = class Webhooks {

    static async wh_messages(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_message){
        try {
            await superagent
                .post(data.wh_message)
                .send(container)
                .end(() => {
                    console.log('webhooks received message....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }
    static async wh_messages_full(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_message_full){
        try {
            await superagent
                .post(data.wh_message_full)
                .send(container)
                .end(() => {
                    console.log('webhooks received message....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }

    static async wh_delete(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_delete){
        try {
            await superagent
                .post(data.wh_delete)
                .send(container)
                .end(() => {
                    console.log('webhooks delete message....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }

    static async wh_call(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_call){
        try {
            await superagent
                .post(data.wh_call)
                .send(container)
                .end(() => {
                    console.log('webhooks call....')
                  });
        } catch (error) {
            console.log(error)
        }
    }
    }

    static async wh_groups(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_groups){
        try {
            await superagent
                .post(data.wh_groups)
                .send(container)
                .end(() => {
                    console.log('webhooks groups change....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }
    static async wh_participants(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_participants){
        try {
            await superagent
                .post(data.wh_participants)
                .send(container)
                .end(() => {
                    console.log('webhooks participant group....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }
    static async wh_presence(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_presence){
        try {
            await superagent
                .post(data.wh_presence)
                .send(container)
                .end(() => {
                    console.log('webhooks presence contact....')
                  });
                

        } catch (error) {
            console.log(error)
        }
    }
    }
    

    static async wh_connect(session, response, number = null, name = null) {
        let container = {
            container: process.env.CONTAINER
          }
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_connect){
            setTimeout(async () => {
               
                try {
                    let object = undefined 
                    if (response.response == 'isConnected') {
                        object = container
                    }else if(response.response == 'tokenRemoved' || response.response == 'qrReadFail' || response.response == 'apiNotResponse' || response.response == 'isDisconnected'){

                        setTimeout(() => {
                            functions.deleteSession(session)
                        }, 3000);

                        object = container

                    } else {
                        object = container
                    }
        
                    if(object !== undefined){
                    await superagent
                        .post(data.wh_connect)
                        .send(object)
                        .end(() => {
                            console.log('webhooks connection....')
                          });
                        
                    }
                } catch (error) {
                    console.log('URL invalid or non-response 200 of server')
                }
            }, 2500);
       
    }
    }

    static async wh_status(session, response) {
        let container = {
            container: process.env.CONTAINER
          }
    
          Object.assign(container, response);
        let data = functions.getUser(session)
        if(data.wh_status){
        try {
            await superagent
                .post(data.wh_status)
                .send(container)
                .end(function () {
                    console.log('webhooks status message....')
                });
        } catch (error) {
            console.log('URL invalid or non-response 200 of server')
        }
    }
    }

    static async wh_qrcode(session, response, urlCode) {
        let data = functions.getUser(session)
        if(data.wh_qrcode){
        try {
            let object = {
                'container': process.env.CONTAINER,
                'session': session,
                'status': 200,
                'type': 'qrcode',
                'urlCode': urlCode,
                'qrcode': response
            }
            await superagent
                .post(data.wh_qrcode)
                .send(object)
                .end(function () {
                    console.log('webhooks qrcode....')
                });
            
        } catch (error) {
            console.log('URL invalid or non-response 200 of server')
        }
    }
    }


}