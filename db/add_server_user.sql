-- this adds a user to a specific server by taking in user_id and the server id of the server
-- then returns the server information

insert into server_users_junction(user_id, server_id)
VALUES($1, $2);

select * from servers where server_id in
(select server_id
from server_users_junction where server_users_junction.user_id = $1);