select users.*,
servers.*
from users
    JOIN server_users_junction on(server_users_junction.user_id = server_users_junction.user_id)
    JOIN servers on(servers.server_id = server_users_junction.server_id)
where server_users_junction.user_id = $1;