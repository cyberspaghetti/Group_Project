update socket_messages 
set message = $2
where socket_message_id = $1;

select *
from socket_messages
where room_id = $3
    and server_id = $4
order by socket_message_id;