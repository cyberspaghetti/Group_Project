select users.*,
servers.*
from users
    JOIN server_users_junction on(user_id = server_users_junction.member_id)
    JOIN servers on(servers.server_id = server_users_junction.server_id)
where member_id = $1;