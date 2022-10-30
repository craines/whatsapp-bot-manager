const functions = require("../controllers/functions");
const Status = require("../requests/status");
const get = require("async-get-file");

module.exports = class Group extends Status {
  static async getAllGroups(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.getGroups();
      let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'get-groups',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async joinGroup(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.joinGroup(ctx.request.body.code);

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'join-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }
  static async createGroup(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let participants = ctx.request.body.participants.split(",");

      let elements = await participants.map(async (el) => {
        let object = el.replace(" ", "");

        let data = functions.getUser(ctx.request.headers["session"]);
        let profile = await data.client.getNumberProfile(object);
        if (profile.exist) {
          return profile.phone;
        }
      });

      let members = await Promise.all(elements);

      const response = await data.client.createGroup(
        ctx.request.body.name,
        members
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'create-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async leaveGroup(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.leaveGroup(ctx.request.body.groupId);
          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'leave-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async revokeGroupLink(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.revokeGroupLink(
        ctx.request.body.groupId
      );
          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'revoke-group-link',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async addParticipants(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let participants = ctx.request.body.participants.split(",");

      let elements = await participants.map(async (el) => {
        let object = el.replace(" ", "");

        let data = functions.getUser(ctx.request.headers["session"]);
        let profile = await data.client.getNumberProfile(object);
        if (profile.exist) {
          return profile.phone;
        }
      });

      let members = await Promise.all(elements);
      const response = await data.client.addParticipantsGroup(
        ctx.request.body.groupId,
        members
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'add-participants-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async removeParticipants(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let participants = ctx.request.body.participants.split(",");

      let elements = await participants.map(async (el) => {
        let object = el.replace(" ", "");

        let data = functions.getUser(ctx.request.headers["session"]);
        let profile = await data.client.getNumberProfile(object);
        if (profile.exist) {
          return profile.phone;
        }
      });

      let members = await Promise.all(elements);
      const response = await data.client.removeParticipantsGroup(
        ctx.request.body.groupId,
        members
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'remove-participants-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async promoteParticipants(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let participants = ctx.request.body.participants.split(",");

      let elements = await participants.map(async (el) => {
        let object = el.replace(" ", "");

        let data = functions.getUser(ctx.request.headers["session"]);
        let profile = await data.client.getNumberProfile(object);
        if (profile.exist) {
          return profile.phone;
        }
      });

      let members = await Promise.all(elements);

      const response = await data.client.addGroupAdmins(
        ctx.request.body.groupId,
        members
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'add-group-admins',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async demoteParticipants(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let participants = ctx.request.body.participants.split(",");

      let elements = await participants.map(async (el) => {
        let object = el.replace(" ", "");

        let data = functions.getUser(ctx.request.headers["session"]);
        let profile = await data.client.getNumberProfile(object);
        if (profile.exist) {
          return profile.phone;
        }
      });

      let members = await Promise.all(elements);

      const response = await data.client.removeGroupAdmins(
        ctx.request.body.groupId,
        members
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'remove-group-admins',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async getGroupInfo(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.infoGroup(ctx.request.body.groupId);
          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'info-group',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async getGroupLink(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      const response = await data.client.getGroupLink(ctx.request.body.groupId);
          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'get-group-link',
        message: 'invalid token Check that the parameter was provided correctly',
    }
          let container = {
          container: process.env.CONTAINER
        }

        Object.assign(container, object);
            ctx.body = container
    }
  }

  static async setGroupPic(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let groupId = ctx.request.body.groupId;

      let name = ctx.request.body.url.split(/[\/\\]/).pop();
      let dir = "files/";
      await get(ctx.request.body.url, { directory: "files" });
      const response = await data.client.setPicture(groupId, dir + name);

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
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

  static async setGroupDescription(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let groupId = ctx.request.body.groupId;

      const response = await data.client.groupDescription(
        groupId,
        ctx.request.body.description
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'group-description',
        message: 'invalid token Check that the parameter was provided correctly',
    }
      ctx.body = object
    }
  }

  static async setGroupName(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let groupId = ctx.request.body.groupId;
      const response = await data.client.groupTitle(
        groupId,
        ctx.request.body.name
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'group-title',
        message: 'invalid token Check that the parameter was provided correctly',
    }
      ctx.body = object
    }
  }

  static async setGroupMessagesAdmins(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let groupId = ctx.request.body.groupId;

      let active = ctx.request.body.admins == "true" ? true : false;

      const response = await data.client.setGroupSettings(
        groupId,
        "message",
        active
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'set-group-settings',
        message: 'invalid token Check that the parameter was provided correctly',
    }
      ctx.body = object
    }
  }

  static async setGroupSettingsAdmins(ctx) {
    let data = functions.getUser(ctx.request.headers["session"]);
    let session = ctx.request.headers['session']
    if (data && data.apikey == ctx.request.headers["apikey"]) {
      let groupId = ctx.request.body.groupId;

      let active = ctx.request.body.admins == "true" ? true : false;

      const response = await data.client.setGroupSettings(
        groupId,
        "settings",
        active
      );

          let container = {
        container: process.env.CONTAINER
      }

      Object.assign(container, response);
          ctx.body = container
    } else {
      let object = {
        session: session,
        status: 404,
        type: 'set-group-settings',
        message: 'invalid token Check that the parameter was provided correctly',
    }
      ctx.body = object
    }
  }
};
