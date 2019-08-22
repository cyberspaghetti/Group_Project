insert into socket_rooms
    (room_name, server_id)
values
    ($1, $2);

select *
from socket_rooms
where room_name = $1;