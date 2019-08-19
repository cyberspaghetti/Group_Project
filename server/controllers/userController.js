module.exports = {
  async editUser(req, res) {
    let { auth0_id, new_user_name, new_user_image } = req.body;
    const db = req.app.get("db");
    let updatedUser = await db.edit_user_info([
      auth0_id,
      new_user_name,
      new_user_image
    ]);
    res.send(updatedUser);
  },

  logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  }
};
