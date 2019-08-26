delete from user_friend_junction
where user_friend_junction = $1;

select *
from users
    join user_friend_junction on (user_friend_junction.user_id = users.user_id)
where user_friend_junction.friend_id = $2
    and user_friend_junction.accepted = false