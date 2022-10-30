const main = require('../controllers/main')
const secret = require('../key/secret')
const functions = require('../controllers/functions')
module.exports = router => {
    router.get('/', ctx => {
        ctx.body = 'OK'
    })
    .post('/whatsapp/connect', async ctx => {
        main.connect(ctx)
        let session = ctx.request.headers['session']
        if(ctx.request.headers['token'] == secret){
            ctx.body = {
                container: process.env.CONTAINER,
                session: session,
                status: 200,
                type: 'connection',
                response: 'isConnecting'
            }
        }else{
            ctx.body = {
                container: process.env.CONTAINER,
                session: session,
                status: 404,
                type: 'connection',
                message: 'Invalid token, please check and try again!!!',
            }
        }
         

    })
    .post('/whatsapp/qrcode', async ctx => {     
        await main.qrcode(ctx)
    })
    .post('/whatsapp/disconnect', async ctx => {     
        await main.disconnect(ctx)
    })
    .post('/whatsapp/logout', async ctx => {     
        await main.logout(ctx)
    })
    .post('/whatsapp/send/text', async ctx =>{
        await main.sendText(ctx)
    })
    .post('/whatsapp/send/image', async ctx =>{
        await main.sendImage(ctx)
    })
    .post('/whatsapp/send/sticker', async ctx =>{
        await main.sendSticker(ctx)
    })
    .post('/whatsapp/send/voice', async ctx =>{
        await main.sendVoice(ctx)
    })
    .post('/whatsapp/send/video', async ctx =>{
        await main.sendVideo(ctx)
    })
    .post('/whatsapp/send/audio', async ctx =>{
        await main.sendAudio(ctx)
    })
    .post('/whatsapp/send/file', async ctx =>{
        await main.sendFile(ctx)
    })
    .post('/whatsapp/send/link', async ctx =>{
        await main.sendLink(ctx)
    })
    .post('/whatsapp/send/list', async ctx =>{
        await main.sendList(ctx)
    })
    .post('/whatsapp/send/buttonsreply', async ctx =>{
        await main.sendButtons(ctx)
    })
    .post('/whatsapp/send/buttonstemplate', async ctx =>{
        await main.sendButtonsReply(ctx)
    })
    .post('/whatsapp/send/buttonsaction', async ctx =>{
        await main.sendButtonAction(ctx)
    })
    .post('/whatsapp/send/contact', async ctx =>{
        await main.sendContact(ctx)
    })
    .post('/whatsapp/send/location', async ctx =>{
        await main.sendLocation(ctx)
    })
    .post('/whatsapp/allcontacts', async ctx =>{
        await main.getAllContacts(ctx)
    })
    .post('/whatsapp/allchats', async ctx =>{
        await main.getAllChats(ctx)
    })
    .post('/whatsapp/blocklist', async ctx =>{
        await main.getBlockList(ctx)
    })
    .post('/whatsapp/messageschat', async ctx => {
        await main.getMessagesChat(ctx)
    })
    .post('/whatsapp/messagesunreadchat', async ctx => {
        await main.getAllUnreadMessages(ctx)
    })
    .post('/whatsapp/profilepic', async ctx => {
        await main.getProfilePic(ctx)
    })
    .post('/whatsapp/getpresence', async ctx => {
        await main.getPresence(ctx)
    })
    .post('/whatsapp/getname', async ctx => {
        await main.getName(ctx)
    })
    .post('/whatsapp/setprofilepic', async ctx => {
        await main.setProfilePic(ctx)
    })
    .post('/whatsapp/allgroups', async ctx => {
        await main.getAllGroups(ctx)
    })
    .post('/whatsapp/joingroup', async ctx => {
        await main.joinGroup(ctx)
    })
    .post('/whatsapp/creategroup', async ctx => {
        await main.createGroup(ctx)
    })
    .post('/whatsapp/leavegroup', async ctx => {
        await main.leaveGroup(ctx)
    })
    .post('/whatsapp/addparticipants', async ctx => {
        await main.addParticipants(ctx)
    })
    .post('/whatsapp/removeparticipants', async ctx => {
        await main.removeParticipants(ctx)
    })
    .post('/whatsapp/promoteparticipants', async ctx => {
        await main.promoteParticipants(ctx)
    })
    .post('/whatsapp/demoteparticipants', async ctx => {
        await main.demoteParticipants(ctx)
    })
    .post('/whatsapp/getgrouplink', async ctx => {
        await main.getGroupLink(ctx)
    })
    .post('/whatsapp/setgrouppic', async ctx => {
        await main.setGroupPic(ctx)
    })
    .post('/whatsapp/setgroupname', async ctx => {
        await main.setGroupName(ctx)
    })
    .post('/whatsapp/setgroupdescription', async ctx => {
        await main.setGroupDescription(ctx)
    })
    .post('/whatsapp/setgroupsettingsadmins', async ctx => {
        await main.setGroupSettingsAdmins(ctx)
    })
    .post('/whatsapp/setgroupmessagesadmins', async ctx => {
        await main.setGroupMessagesAdmins(ctx)
    })
    .post('/whatsapp/deletechat', async ctx => {
        await main.deleteChat(ctx)
    })
    .post('/whatsapp/deletemessageall', async ctx => {
        await main.deleteMessageAll(ctx)
    })
    .post('/whatsapp/deletemessageme', async ctx => {
        await main.deleteMessageMe(ctx)
    })
    .post('/whatsapp/archivechat', async ctx => {
        await main.archiveChat(ctx)
    })
    .post('/whatsapp/messagetemporary', async ctx => {
        await main.messageTemporary(ctx)
    })
    .post('/whatsapp/send/reaction', async ctx => {
        await main.sendReaction(ctx)
    })
    .post('/whatsapp/blockcontact', async ctx => {
        await main.blockContact(ctx)
    })
    .post('/whatsapp/unblockcontact', async ctx => {
        await main.unblockContact(ctx)
    })
    .post('/whatsapp/pinchat', async ctx => {
        await main.pinChat(ctx)
    })
    .post('/whatsapp/mutechat', async ctx => {
        await main.muteChat(ctx)
    })
    .post('/whatsapp/unmutechat', async ctx => {
        await main.unmuteChat(ctx)
    })
    .post('/whatsapp/numberprofile', async ctx => {
        await main.getNumberProfile(ctx)
    })
    .post('/whatsapp/connectionstate', async ctx => {
        await main.getConnectionState(ctx)
    })
    .post('/whatsapp/gethostdevice', async ctx => {
        await main.getHostDevice(ctx)
    })
    .post('/whatsapp/forwardMessage', async ctx => {
        await main.forwardMessage(ctx)
    })
    .post('/whatsapp/addstatustext', async ctx => {
        await main.addStatusText(ctx)
    })
    .post('/whatsapp/addstatusimage', async ctx => {
        await main.addStatusImage(ctx)
    })
    .post('/whatsapp/addstatusvideo', async ctx => {
        await main.addStatusVideo(ctx)
    })
    .post('/whatsapp/deletestories', async ctx => {
        await main.deleteStories(ctx)
    })
    .post('/whatsapp/set/image/group', async ctx =>{
        await main.setGroupPic(ctx)
    })
    .post('/whatsapp/setpresence', async ctx =>{
       await  main.setPresence(ctx)
    })
    .post('/whatsapp/getmessagebyid', async ctx =>{
       await  main.getMessageById(ctx)
    })
    .post('/whatsapp/getmessageschat', async ctx =>{
        await main.getChatMessages(ctx)
    })
    .post('/whatsapp/getchatallmessages', async ctx =>{
        await main.getChatAllMessages(ctx)
    })
    .post('/whatsapp/decryptByIdFileSave', async ctx =>{
        await main.decryptByIdFileSave(ctx)
    })
    .post('/whatsapp/decryptByIdFile', async ctx =>{
        await main.decryptByIdFile(ctx)
    })
    .post('/whatsapp/getgroupInfo', async ctx =>{
        await main.getGroupInfo(ctx)
    })
    .post('/whatsapp/decryptremote', async ctx =>{
        await main.decryptRemote(ctx)
    })
    .post('/whatsapp/markread', async ctx =>{
        await main.markRead(ctx)
    })
    .post('/whatsapp/markreadall', async ctx =>{
        await main.markReadAll(ctx)
    })
    .post('/whatsapp/setpresence', async ctx =>{
        await main.setPresence(ctx)
    })
    .post('/whatsapp/product/create', async ctx =>{
        await main.productCreate(ctx)
    })

}

