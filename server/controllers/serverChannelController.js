module.exports = {
  createServer: async (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { server_name, server_image, user_id } = req.body;
    const serverId = await dbInstance.create_server([
      server_name,
      server_image,
      user_id
    ]);
    await dbInstance.create_server_users_junction(
      serverId[0].server_id,
      user_id
    );
    const data = await dbInstance.get_server_by_user_id(user_id);
    res.status(200).send(data);
  },

  getUserServer: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_server_by_user_id(req.params.id)
      .then(server => {
        res.status(200).send(server);
      })
      .catch(err => {
        res.status(500).send({
          errorMessage: "Something went wrong with get server by user Id"
        });
        console.log(err);
      });
  },

  getServerUsers: async (req, res, next) => {
    console.log('hit')
    const db = req.app.get("db");
    const { user_id } = req.params;
    console.log(req.params);
    let data = await db.get_server_by_user_id(+user_id);
    console.log('dta',data)
    res.send(data);
  },

  getServers: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_servers()
      .then(servers => res.status(200).send(servers))
      .catch(err => {
        res.status(500).send({ errorMessage: "getAllServers is broken" });
        console.log(err);
      });
  },

  getServerName: async (req, res, next) => {
    const dbInstance = req.app.get("db");
    let data = await dbInstance.get_server_name(req.params.id);
    res.send(data);
  },

  async deleteServerUser(req, res) {
    let { userId } = req.params;
    let { serverId } = req.query;
    const db = req.app.get("db");
    let serverUsers = await db.delete_server_user([+userId, +serverId]);
    res.send(serverUsers);
  },

  async addServerUser(req, res) {
    let { user_id, server_id } = req.body;
    console.log('hit controller add', user_id, server_id)
    const db = req.app.get("db");
    let serverUsers = await db.add_server_user([+user_id, +server_id]);
    res.send(serverUsers);
  },

  async getRoomName(req, res) {
    let { socket_room_id } = req.params;
    let { server_id } = req.query;
    const db = req.app.get("db");
    let roomName = await db.get_room_name(socket_room_id, server_id);
    res.send(roomName);
  }
};
