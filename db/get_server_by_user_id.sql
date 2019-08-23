select users.*,
servers.*
from users
    JOIN server_users_junction on(server_users_junction.user_id = server_users_junction.user_id)
    JOIN servers on(users.user_id = server_users_junction.server_id)
where users.user_id = $1;