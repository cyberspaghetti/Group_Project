delete from user_friend_junction
where user_id = $1
and server_id = $2;