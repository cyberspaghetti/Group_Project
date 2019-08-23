insert into socket_rooms
    (room_name, server_id, user_id)
values
    ($1, $2, $3);

select *
from socket_rooms
where server_id = $2;