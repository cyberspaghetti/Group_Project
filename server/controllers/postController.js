module.exports = {

  async getAllPosts(req, res) {
    const db = req.app.get("db");
    let newsPosts = await db.get_all_news_posts();
    res.send(newsPosts);
  },

  async getPostByUserId(req, res) {
    const db = req.app.get("db");
    let usersPosts = await db.get_user_posts();
    res.send(usersPosts)
  },

  async deletePost(req, res) {
    console.log('hit delete post', req.query, req.params);
    let { userId } = req.params;
    let { postId } = req.query
    const db = req.app.get('db');
    let postList = await db.delete_user_post([
      +userId, +postId
    ])
    let posts = await db.get_all_news_posts()
    res.send(posts);
  },

  async createPost(req, res) {
    let { user_id, news_post_title, news_post_image, news_post_body, news_post_date } = req.body;
    const db = req.app.get('db');
    let postList = await db.create_post([
      +user_id, news_post_title, news_post_image, news_post_body, news_post_date,
    ]);
    res.send(postList);
  },

  async editPost(req, res) {
    let { postId, user_id, news_post_title, news_post_image, news_post_body, news_post_date } = req.body;
    const db = req.app.get("db");
    let updatedUser = await db.edit_post([
      +postId, +user_id, news_post_title, news_post_image, news_post_body, news_post_date
    ]);
    let post = await db.get_user_posts
    res.send(updatedUser);
  },

  async getPost(req, res) {
    let { postId } = req.params
    const db = req.app.get('db');
    let post = await db.get_single_card(
      +postId)
    res.send(post);
  },

}