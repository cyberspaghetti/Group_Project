module.exports = {
    createServer: async (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { server_id, server_name, server_image, user_id } = req.body
      console.log(req.body);
      const serverChannelId = await dbInstance.create_server([server_id, server_name, server_image, user_id])
      await dbInstance.create_server_users_junction(server_id, user_id)
      const data = await dbInstance.get_server_by_user_id(user_id)
      res.status(200).send(data)
  
    },
    getServer: (req, res, next) => {
      const dbInstance = req.app.get('db');
      dbInstance.get_server_by_user_id(req.params.id)
        .then(server => {
          res.status(200).send(server)
        })
        .catch(err => {
          res.status(500).send({ errorMessage: "Something went wrong with get server by user Id" });
          console.log(err)
        });
    },
  
    getServerUsers: async (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { user_id } = req.params
      dbInstance.get_server_users(req.params.id)
        .then(users => {
          res.status(200).send(users)
        })
        .catch(err => {
          res.status(500).send({ errorMessage: "get users is broken" });
          console.log(err)
        });
    },
  
    getServers: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_servers()
        .then(servers => res.status(200).send(servers))
        .catch(err => {
          res.status(500).send({ errorMessage: "getAllServers is broken" });
          console.log(err)
        });
    },
  
    async deleteServerUser(req, res) {
      let { userId } = req.params;
      let { serverId } = req.query
      const db = req.app.get('db');
      let serverUsers = await db.delete_server_user([
        +userId,
        +serverId,
      ]);
      res.send(serverUsers);
    },

    async addServerUser(req, res) {
      let { userId, serverId } = req.body;
      const db = req.app.get('db');
      let serverUsers = await db.add_server_user([
        userId,
        +serverId,
      ]);
     
      res.send(serverUsers);
    },
  }