import axios from "axios";

export async function logout() {
  let friends = await axios.get("/api/getFriends/:user_id");
  this.setState({
    friends: friends.data
  });
}

export async function createPost() {
  let posts = await axios.post("/api/createPost");
  this.setState({
    posts: posts.data
  });
}

export async function getPost() {
  let post = await axios.get("/api/post/:postId");
  this.setState({
    post: post.data
  });
}

export async function friendRequests() {
  let friendRequest = await axios.get("/api/friendRequests/:user_id");
  this.setState({
    friendRequest: friendRequest.data
  });
}

export async function getServerName() {
  let serverName = await axios.get("/api/serverName/:id");
  this.setState({
    serverName: serverName.data
  });
}
