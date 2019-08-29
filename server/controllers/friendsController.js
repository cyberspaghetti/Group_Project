module.exports = {
  async getFriends(req, res) {
    let { user_id } = req.params;
    const db = req.app.get("db");
    let friends = await db.get_friends(+user_id);
    let friends2 = await db.get_friends_two(+user_id)
  res.send({friends, friends2});
  },

  async deleteFriend(req, res) {
    console.log(req.params)
    let { userId } = req.params;
    let { friendId } = req.query;
    const db = req.app.get("db");
    let friendsList = await db.delete_friend([+userId, +friendId]);
    let friends2 = await db.get_friends_two(+userId)
    res.send({friendsList, friends2});
  },

  async deleteFriendTwo(req, res) {
    let { userId } = req.params;
    console.log(req.params)
    let { friendId } = req.query;
    const db = req.app.get("db");
    let friendsList = await db.delete_friend_two([+userId, +friendId]);
    let friends2 = await db.get_friends(+friendId)
    res.send({friendsList, friends2});
  },

  async addFriend(req, res) {
    let { user_id, friend_id } = req.body;
    const db = req.app.get("db");
    let requests = await db.add_friend([user_id, +friend_id]);
    res.send(requests);
  },

  async friendRequests(req, res) {
    let { user_id } = req.params;
    const db = req.app.get("db");
    let requests = await db.get_friend_requests(user_id);
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
    let friends2 = await db.get_friends_two(+user_id)
    res.send({ updatedRequests, updatedFriends, friends2 });
  }
};
