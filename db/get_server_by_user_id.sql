select * from servers where server_id in
(select server_id
from server_users_junction where server_users_junction.user_id = $1);