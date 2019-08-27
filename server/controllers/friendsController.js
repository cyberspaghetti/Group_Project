module.exports = {
  async getFriends(req, res) {
    let { user_id } = req.params;
    const db = req.app.get("db");
    let friends = await db.get_friends(+user_id);
    res.send(friends);
  },

  async deleteFriend(req, res) {
    let { userId } = req.params;
    let { friendId } = req.query;
    const db = req.app.get("db");
    console.log(userId, friendId);
    let friendsList = await db.delete_friend([+userId, +friendId]);
    res.send(friendsList);
  },

  async addFriend(req, res) {
    let { user_id, friend_id } = req.body;
    const db = req.app.get("db");
    let friendsList = await db.add_friend([user_id, +friend_id]);

    res.send(friendsList);
  },

  async friendRequests(req, res) {
    let { user_id } = req.params;
    console.log(user_id);
    const db = req.app.get("db");
    let requests = await db.get_friend_requests(user_id);
    console.log(requests)
    res.send(requests);
  },

  async rejectFriend(req, res) {
    let { user_friend_junction } = req.params;
    let { user_id } = req.query;
    const db = req.app.get("db");
    let updatedRequests = await db.reject_friend(user_friend_junction, user_id);
    res.send(updatedRequests);
  },

  async acceptFriend(req, res) {
    const { user_friend_junction, user_id } = req.body;
    const db = req.app.get("db");
    let updatedRequests = await db.accept_friend(user_friend_junction, user_id);
    let updatedFriends = await db.get_friends(user_id);
    res.send({ updatedRequests, updatedFriends });
  }
};
