const Groups = require("../requests/groups");
const functions = require("../controllers/functions");
const get = require("async-get-file");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const genid = require("genid");

module.exports = class Mensagens extends Groups {
  static async sendText(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendText(
        chatId,
        ctx.request.body.text,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-text",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendReaction(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendReaction(
        chatId,
        ctx.request.body.text,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-reaction",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendImage(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendImage(
        chatId,
        ctx.request.body.url,
        ctx.request.body.text,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-image",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendVideo(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      let response = await data.client.sendVideo(
        chatId,
        ctx.request.body.url,
        ctx.request.body.text,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-video",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendSticker(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendSticker(
        chatId,
        ctx.request.body.url,
        ctx.request.body.msgId
      );

      ctx.body = response;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-sticker",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendFile(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendDocument(
        chatId,
        ctx.request.body.url,
        ctx.request.body.filename,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-file",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }



  static async sendButtonsReply(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      let objs = [];

      for (let index = 0; index < 50; index++) {

        let btn = 'button'+index
     
        let button = ctx.request.body[btn] ? ctx.request.body['button'+index].split(',') : false;

        if (button) {
     
        objs.push({index: index, quickReplyButton: {displayText: button[0], id: button[1]}})
            
          
        }
        
      }

      let response = await data.client.sendButtonsMD(
        chatId,
        ctx.request.body.title,
        objs,
        ctx.request.body.description,
        ctx.request.body.type,
        ctx.request.body.url
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-buttons-reply",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }
  static async sendButtons(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      let objs = [];

      for (let index = 0; index < 50; index++) {

        let btn = 'button'+index
     
        let button = ctx.request.body[btn] ? ctx.request.body['button'+index].split(',') : false;

        if (button) {
    
        objs.push({buttonId: button[1], buttonText: {displayText: button[0], type: 1}})
            
          
        }
        
      }

      let response = await data.client.sendButtons(
        chatId,
        ctx.request.body.title,
        objs,
        ctx.request.body.description,
        ctx.request.body.type,
        ctx.request.body.url
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-buttons",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendButtonAction(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      let objs = []
      if(ctx.request.body.action == 'url'){
        objs.push({ index: 1, urlButton: { displayText:  ctx.request.body.buttonText, url: ctx.request.body.buttonSet } });
      }else if(ctx.request.body.action == 'call'){
        objs.push({ index: 1, callButton: { displayText:  ctx.request.body.buttonText, url: ctx.request.body.buttonSet } });
      }else{
        let copy = ctx.request.body.data
        objs.push({ index: 1, urlButton: { displayText:  ctx.request.body.buttonText, url: 'https://www.whatsapp.com/otp/copy/'+ copy } });
      }
      

      let response = await data.client.sendButtonsMD(
        chatId,
        ctx.request.body.title,
        objs,
        ctx.request.body.description,
        ctx.request.body.type,
        ctx.request.body.url
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-buttons-action",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }
  static async sendList(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      
      const sections = []

      for (let index = 0; index < 10; index++) {

        let sec = 'section'+index
     
        let section = ctx.request.body[sec]
        ? ctx.request.body[sec]
        : false;


        if (section) {

          let rows = []

          for (let index = 0; index < 50; index++) {

            let opt = 'option'+index
         
            let option = ctx.request.body[opt]
            ? ctx.request.body[opt].split(',')
            : false;


            if (option && option[0].trim() == sec) {
            
                  rows.push({title: option[1].trim(), rowId: option[2].trim(), description: option[3].trim()})
              
            }
          }

          sections.push({
            title: section,
            rows: rows
              })
        }
        
      }

      let response = await data.client.sendList(
        chatId,
        ctx.request.body.btnName,
        sections,
        ctx.request.body.title,
        ctx.request.body.description,
        ctx.request.body.footer
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-buttons",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendAudio(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendAudio(
        chatId,
        ctx.request.body.url,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-audio",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }


  static async ffmpegSync(path, pathSave) {
    return new Promise((resolve, reject) => {
      ffmpeg(path)
        .audioCodec('libopus')
        .audioChannels(1)
        .toFormat('ogg')
        .output(pathSave)
        .noVideo()
        .on('end', () => {
          console.log("end")
          return resolve(pathSave)
        }).on('error', (err) => {
          console.log("err")
          console.log(err)
          return reject(new Error(err))
        }).run();
    })
  }

  static async sendVoice(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;
      let file = ctx.request.body.url.split(/[\/\\]/).pop();
      let name = file.split('.')[0];
      let dir = 'files/'
      await get(ctx.request.body.url, {
        directory: 'files/'
      });

      let mp3 = dir + file

      var pathNewAudio = await this.ffmpegSync(mp3, `${dir + name + 'convert.ogg'}`)

      let response = await data.client.sendVoice(
        chatId,
        pathNewAudio,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-voice",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }
  static async sendLink(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendLink(
        chatId,
        ctx.request.body.url,
        ctx.request.body.text,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-link",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendContact(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendContact(
        chatId,
        ctx.request.body.name,
        ctx.request.body.contact
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-contact",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }

  static async sendLocation(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let chatId = ctx.request.body.chatId;

      let response = await data.client.sendLocation(
        chatId,
        ctx.request.body.lat,
        ctx.request.body.log,
        ctx.request.body.title,
        ctx.request.body.address,
        ctx.request.body.msgId
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "send-location",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }


  static async productCreate(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers["session"];
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let name = ctx.request.body.name;
      let description = ctx.request.body.description;
      let price = ctx.request.body.price;
      let currency = ctx.request.body.currency;
      let image = ctx.request.body.image;
     
      

      let response = await data.client.productCreate(
        {
          name: name,
          description: description,
          price: Number(price),
          currency: currency,
          isHidden: false,
          images: [
            {
              url: '',
            }
          ]
        }
      );

      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, response);
      ctx.body = container;
    } else {
      let object = {
        session: session,
        status: 404,
        type: "product-create",
        message:
          "invalid token Check that the parameter was provided correctly",
      };
      let container = {
        container: process.env.CONTAINER,
      };

      Object.assign(container, object);
      ctx.body = container;
    }
  }
};

