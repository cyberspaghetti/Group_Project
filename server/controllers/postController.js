module.exports = {

    async getAllPosts(req, res) {
       const db = req.app.get("db");
       let newsPosts = await db.get_all_news_posts();
       res.send(newsPosts);
       console.log('news posts serverside', newsPosts)
     },
 
     async deletePost(req, res) {
       let { server_id } = req.params;
       let { news_post_id } = req.query
       console.log('delete Post serverside', server_id, news_post_id);
       const db = req.app.get('db');
       let postList = await db.delete_post([
        +server_id, +news_post_id
       ]);
       console.log(postList)
       res.send(postList);
     },
     
     async createPost(req, res) {
       let { server_id, news_post_title, news_post_body, news_post_date, news_post_image } = req.body;
       console.log('add Post serverside', server_id, news_post_title, news_post_body, news_post_date, news_post_image );
       const db = req.app.get('db');
       let postList = await db.add_post([
         +server_id, news_post_title, news_post_body, news_post_date, news_post_image 
       ]);
      
       res.send(postList);
     },
 
 }