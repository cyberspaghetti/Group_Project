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
      console.log('delete friend serverside', userId, friendId);
      const db = req.app.get('db');
      let friendsList = await db.delete_friend([
        +userId,
        +friendId,
      ]);
      console.log(friendsList)
      res.send(friendsList);
    },
    
    async addFriend(req, res) {
      let { userId, friendId } = req.body;
      console.log('add friend serverside', userId, friendId);
      const db = req.app.get('db');
      let friendsList = await db.add_friend([
        userId,
        +friendId,
      ]);
     
      res.send(friendsList);
    },

}

  