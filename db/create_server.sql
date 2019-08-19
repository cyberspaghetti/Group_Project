insert into servers(server_name, server_image, user_id)
values($1, $2, $3)

returning *
