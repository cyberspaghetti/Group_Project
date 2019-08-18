module.exports = {
    createServerChannel: async (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { server_id, server_name, server_image, owner_id } = req.body
      const serverChannelId = await dbInstance.create_server_channel([server_id, server_name, server_image, owner_id])
      await dbInstance.create_server_users_junction(owner_id, serverChannelId[0].id)
      const data = await dbInstance.get_server_channel_by_user_id(owner_id)
      res.status(200).send(data)
  
    },
    getServerChannel: (req, res, next) => {
      const dbInstance = req.app.get('db');
      console.log('hit get team');
      dbInstance.get_server_channel_by_user_id(req.params.id)
        .then(server => {
          res.status(200).send(server)
        })
        .catch(err => {
          res.status(500).send({ errorMessage: "Something went wrong with get Channel by channel Id" });
          console.log(err)
        });
    },
  
    getServerChannelMembers: async (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { user_id } = req.params
      dbInstance.get_server_channel_members(req.params.id)
        .then(members => {
          res.status(200).send(members)
        })
        .catch(err => {
          res.status(500).send({ errorMessage: "get members is broken" });
          console.log(err)
        });
    },
  
    getAllServers: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_server_channels()
        .then(servers => res.status(200).send(servers))
        .catch(err => {
          res.status(500).send({ errorMessage: "getAllServers is broken" });
          console.log(err)
        });
    },
  
    async deleteServerChannelMember(req, res) {
      let { userId } = req.params;
      let { serverId } = req.query
      const db = req.app.get('db');
      let serverMembers = await db.delete_server_channel_member([
        +userId,
        +serverId,
      ]);
      res.send(serverMembers);
    },

    async addServerChannelMember(req, res) {
      let { userId, serverId } = req.body;
      const db = req.app.get('db');
      let serverMembers = await db.add_server_channel_member([
        userId,
        +serverId,
      ]);
     
      res.send(serverMembers);
    },
  }