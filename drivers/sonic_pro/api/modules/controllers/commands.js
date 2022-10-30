const Mensagens = require('../requests/mensagens')
const functions = require('../controllers/functions')
const get = require("async-get-file");

module.exports = class Commands extends Mensagens {

    static async getBatteryLevel(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getBatteryLevel()
      
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-battery-level',
            message: 'invalid token Check that the parameter was provided correctly',
        }

        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }
    static async getConnectionState(ctx){
    
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          
            const response = await data.client.getConnectionState()
                let container = {
        container: process.env.CONTAINERfd
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object =  {
            session: session,
            status: 404,
            type: 'get-connection-state',
            state: 'disconnected',
            message: 'invalid token or disconnected, Check that the parameter was provided correctly',
        }

        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
       
      
    }

   

    static async getHostDevice(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getHostDevice()
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-host-device',
            message: 'invalid token Check that the parameter was provided correctly',
        }
            ctx.body = object
        }
    }
    
   
    static async getAllContacts(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getAllContacts()
   
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-all-contacts',
            message: 'invalid token Check that the parameter was provided correctly',
        }

                let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }

    static async getAllChats(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getChats()
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-chats',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }

    static async getBlockList(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getBlockList()
       
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-block-list',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }
    
    static async getChatAllMessages(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
      const response = await data.client.getChatAllMessages(chatId)
       
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container

        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-chat-all-messages',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }

    static async setPresence(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let type = ctx.request.body.type;
       const response = await data.client.setPresence(chatId, type);
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
       
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'set-presence',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }
    static async getMessageById(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
       const response = await data.client.getMessageById(chatId, msgId);
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
       
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-message-by-id',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }
    static async getChatMessages(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let number = ctx.request.body.number;
       const response = await data.client.getChatMessages(chatId, number);
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
       
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-chat-all-messages',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }
    static async getAllUnreadMessages(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
       const response = await data.client.getAllUnreadMessages();
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
       
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-all-unread-messages',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }

    static async getProfilePic(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
      
       
      const response = await data.client.getPicture(chatId)
       
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
   
        }else{
            let object = {
              session: session,
              status: 404,
              type: 'get-picture',
              message: 'invalid token Check that the parameter was provided correctly',
          }
          let container = {
            container: process.env.CONTAINER
          }
  
          Object.assign(container, object);
              ctx.body = container
        }
    }
    static async getName(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
      
       
      const response = await data.client.getName(chatId)
       
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
   
        }else{
            let object = {
              session: session,
              status: 404,
              type: 'get-name',
              message: 'invalid token Check that the parameter was provided correctly',
          }
          let container = {
            container: process.env.CONTAINER
          }
  
          Object.assign(container, object);
              ctx.body = container
        }
    }
    static async getPresence(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
      
       
      const response = await data.client.getPresence(chatId)
       
           let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
   
        }else{
            let object = {
              session: session,
              status: 404,
              type: 'get-presence',
              message: 'invalid token Check that the parameter was provided correctly',
          }
          let container = {
            container: process.env.CONTAINER
          }
  
          Object.assign(container, object);
              ctx.body = container
        }
    }

    
    static async deleteMessageAll(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
  
           const response = await data.client.deleteMessageAll(chatId, msgId);
            
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
          
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'delete-message-all',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async deleteMessageMe(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
       
           const response = await data.client.deleteMessageMe(chatId, msgId);
            
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
          
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'delete-message-me',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async deleteChat(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
       
           const response = await data.client.deleteChat(chatId);
            
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
          
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'delete-chat',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    
    
    static async pinChat(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
            let boolean = ctx.request.body.option == 'true' ? true : false
       
            const response = await data.client.pinChat(chatId, boolean);
         
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
         
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'pin-chat',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async archiveChat(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
            let boolean = ctx.request.body.option == 'true' ? true : false
       
            const response = await data.client.archiveChat(chatId, boolean);
         
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
         
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'archive-chat',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    static async muteChat(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let time = ctx.request.body.timer
       
          const response = await data.client.muteChat(chatId, time);
         
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
         
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'mute-chat',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    static async unmuteChat(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
       
          const response = await data.client.unmuteChat(chatId);
         
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
         
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'unmute-chat',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async forwardMessage(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let contactId = ctx.request.body.contactId;
          let chatId = ctx.request.body.chatId;
            const response = await data.client.forwardMessage(chatId, ctx.request.body.msgId);
           
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'forward-message',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async messageTemporary(ctx){
      let data = functions.getUser(ctx.request.headers['session'])
      let session = ctx.request.headers['session']
     if(data && data.apikey == ctx.request.headers['apikey']){
       let chatId = ctx.request.body.chatId;
       let time = ctx.request.body.time;
         const response = await data.client.messageTemporary(chatId, time);
        
           let container = {
     container: process.env.CONTAINER
   }

   Object.assign(container, response);
       ctx.body = container
    
     }else{
       let object = {
         session: session,
         status: 404,
         type: 'message-temporary',
         message: 'invalid token Check that the parameter was provided correctly',
     }
     let container = {
       container: process.env.CONTAINER
     }

     Object.assign(container, object);
         ctx.body = container
         }
 }
    
    static async blockContact(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
            const response = await data.client.blockContact(chatId);
           
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
       
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'block-contact',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    
    static async unblockContact(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
      
            const response = await data.client.unblockContact(chatId);
            
              let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
        
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'unblock-contact',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    
    static async decryptByIdFileSave(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
          let filename = ctx.request.body.filename;
            const response = await data.client.decryptByIdFileSave(chatId, msgId, filename);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'decrypt-by-id-save-file',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    static async decryptByIdFile(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
            const response = await data.client.decryptByIdFile(chatId, msgId);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'decrypt-by-id-save-file',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async decryptRemote(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let msgId = ctx.request.body.msgId;
            const response = await data.client.decryptRemote(chatId, msgId);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'decrypt-remote',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
 
    static async markRead(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let msgId = ctx.request.body.msgId;
            const response = await data.client.markRead(msgId);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'mark-read',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }

    static async markReadAll(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
            const response = await data.client.markReadAll(chatId);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'mark-read-all',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    static async getNumberProfile(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
            const response = await data.client.getNumberProfile(chatId);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'get-number-profile',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }
    static async setPresence(ctx){
         let data = functions.getUser(ctx.request.headers['session'])
         let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
          let chatId = ctx.request.body.chatId;
          let state = ctx.request.body.state;
            const response = await data.client.setPresence(chatId, state);
            
                let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
           
        }else{
          let object = {
            session: session,
            status: 404,
            type: 'set-presence',
            message: 'invalid token Check that the parameter was provided correctly',
        }
        let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
            }
    }


    static async setProfilePic(ctx) {
      let data = functions.getUser(ctx.request.headers["session"]);
      let session = ctx.request.headers['session']
      if (data && data.apikey == ctx.request.headers["apikey"]) {
        let chatId = ctx.request.body.chatId;
  
        let name = ctx.request.body.url.split(/[\/\\]/).pop();
        let dir = "files/";
        await get(ctx.request.body.url, { directory: "files" });
        const response = await data.client.setPicture(chatId, dir + name);
  
            let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container;
      } else {
        let object = {
          session: session,
          status: 404,
          type: 'set-picture',
          message: 'invalid token Check that the parameter was provided correctly',
      }
      let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, object);
          ctx.body = container
      }
    }
    
}

