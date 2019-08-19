
delete from server_users_junction
where user_id = $1
and server_id = $2;

SELECT
users.*,
server_users_junction.*
FROM users
join server_users_junction on(users.user_id = server_users_junction.user_id)
where server_users_junction.server_id = (select server_id from server_users_junction where server_id = $2)