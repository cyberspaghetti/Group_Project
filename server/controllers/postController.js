module.exports = {

  async getAllPosts(req, res) {
    const db = req.app.get("db");
    let newsPosts = await db.get_all_news_posts();
    res.send(newsPosts);
  },

  async getPostByUserId(req, res){
    const db = req.app.get("db");
    let usersPosts = await db.get_user_posts();
    res.send(usersPosts)
  },

  async deletePost(req, res) {
    let { user_id } = req.params;
    let { news_post_id } = req.query
    const db = req.app.get('db');
    let postList = await db.delete_post([
      +news_post_id, +user_id
    ])
    res.send(postList);
  },

  async createPost(req, res) {
    console.log('hit server', req.body)
    let { user_id, news_post_title, news_post_image, news_post_body, news_post_date } = req.body;
    const db = req.app.get('db');
    let postList = await db.create_post([
      +user_id, news_post_title, news_post_image, news_post_body, news_post_date,
    ]);
    res.send(postList);
  },

}