module.exports = {

    async getUsersPosts(req, res) {
       let { user_id } = req.params;
       const db = req.app.get("db");
       let friends = await db.get_user_posts(+user_id);
       res.send(friends);
     },
 
     async deletePost(req, res) {
       let { userId } = req.params;
       let { postId } = req.query
       console.log('delete Post serverside', userId, postId);
       const db = req.app.get('db');
       let postList = await db.delete_friend([
         +userId,
         +postId,
       ]);
       console.log(postList)
       res.send(postList);
     },
     
     async addPost(req, res) {
       let { userId, postId } = req.body;
       console.log('add Post serverside', userId, postId);
       const db = req.app.get('db');
       let postList = await db.add_friend([
         userId,
         +postId,
       ]);
      
       res.send(postList);
     },
 
 }