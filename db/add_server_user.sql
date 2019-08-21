-- this adds a user to a specific server by taking in user_id and the server id of the server
-- then returns the server information

insert into server_users_junctuion(user_id, server_id)
VALUES($1, $2);

SELECT
users.*,
server_users_junction.*
FROM users
join server_users_junction on(users.user_id = server_users_junction.user_id)
where server_users_junction.server_id = (select server_id from server_users_junction where user_id = $1);