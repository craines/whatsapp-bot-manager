
const functions = require('../controllers/functions')
const get = require("async-get-file")
const path = require('path')
const fs = require('fs')

module.exports = class Status{

    static async addStatusText(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){

            const response = await data.client.sendTextStatus(ctx.request.body.text)

            ctx.body = response
          
        }else{
            let object = {
                session: session,
                status: 404,
                type: 'send-text-status',
                message: 'invalid token Check that the parameter was provided correctly',
            }
              let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }


    static async addStatusImage(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
        const response = await data.client.sendImageStatus(ctx.request.body.url, ctx.request.body.text).catch(error => console.log(error))
      
     
                ctx.body = response
        }else{
            let object = {
                session: session,
                status: 404,
                type: 'send-image-status',
                message: 'invalid token Check that the parameter was provided correctly',
            }
              let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }


    static async addStatusVideo(ctx){
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
        if(data && data.apikey == ctx.request.headers['apikey']){
           
                try {
                    const response = await data.client.sendVideoStatus(ctx.request.body.url, ctx.request.body.text)
                    ctx.body = response

                } catch (error) {
                    console.log(error)
                }
                   
        }else{
            let object = {
                session: session,
                status: 404,
                type: 'send-video-status',
                message: 'invalid token Check that the parameter was provided correctly',
            }
              let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
        }
    }


    static async deleteStories(ctx){
     
        let data = functions.getUser(ctx.request.headers['session'])
        let session = ctx.request.headers['session']
       if(data && data.apikey == ctx.request.headers['apikey']){
      
           const response = await data.client.deleteStatus(ctx.request.body.msgId);
           
           ctx.body = response

       }else{
        let object = {
            session: session,
            status: 404,
            type: 'delete-status',
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