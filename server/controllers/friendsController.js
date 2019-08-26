module.exports = {

   async getFriends(req, res) {
      let { user_id } = req.params;
      const db = req.app.get("db");
      let friends = await db.get_friends(+user_id);
      res.send(friends);
    },

    async deleteFriend(req, res) {
      let { userId } = req.params;
      let { friendId } = req.query
      const db = req.app.get('db');
      console.log(userId, friendId)
      let friendsList = await db.delete_friend([
        +userId,
        +friendId,
      ]);
      res.send(friendsList);
    },
    
    async addFriend(req, res) {
      let { user_id, friend_id } = req.body;
      const db = req.app.get('db');
      let friendsList = await db.add_friend([
        user_id,
        +friend_id,
      ]);
     
      res.send(friendsList);
    },

}

  