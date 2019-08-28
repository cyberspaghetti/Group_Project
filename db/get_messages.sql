select *
from socket_messages
where room_id = $1
    and server_id = $2
order by socket_message_id;