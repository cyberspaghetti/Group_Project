module.exports = {

   async getFriends(req, res) {
      let { user_id } = req.params;
      const db = req.app.get("db");
      //gets all rooms within a specific server
      console.log(user_id)
      let friends = await db.get_friends(+user_id);
    //   console.log(friends)
      res.send(friends);
    },
}

  