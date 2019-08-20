module.exports = {
  async createRoom(req, res) {
    let { room_name, server_id } = req.body;
    const db = req.app.get("db");
    //creates room and returns all rooms in server (to update redux/state)
    let updatedRooms = await db.create_room([room_name, server_id]);
    res.send(updatedRooms);
  },

  getRooms(req, res) {
    let { server_id } = req.params;
    const db = req.app.get("db");
    //gets all rooms within a specific server
    let serverRooms = db.get_rooms(server_id);
    res.send(serverRooms);
  }

  //   joining rooms, sending messages, getting
  //   messages and exiting room will all be
  //   done using sockets
};
