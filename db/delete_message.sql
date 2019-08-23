delete from socket_messages
   where socket_message_id
= $1;

select *
from socket_messages
where room_id = $2
    and server_id = $3;