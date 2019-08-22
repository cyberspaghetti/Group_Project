select room_name
from socket_rooms
where socket_room_id = $1
    and server_id = $2;