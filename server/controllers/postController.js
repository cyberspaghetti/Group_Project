module.exports = {

    async getAllPosts(req, res) {
       const db = req.app.get("db");
       let newsPosts = await db.get_all_news_posts();
       res.send(newsPosts);
     },
 
     async deletePost(req, res) {
       let { server_id } = req.params;
       let { news_post_id } = req.query
       const db = req.app.get('db');
       let postList = await db.delete_post([
        +server_id, +news_post_id
       ]);
       res.send(postList);
     },
     
     async createPost(req, res) {
       let { server_id, news_post_title, news_post_body, news_post_date, news_post_image } = req.body;
       const db = req.app.get('db');
       let postList = await db.add_post([
         +server_id, news_post_title, news_post_body, news_post_date, news_post_image 
       ]);
      
       res.send(postList);
     },
 
 }