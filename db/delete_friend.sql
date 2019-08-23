delete from user_friend_junction
where user_id = $1
and friend_id = $2;

select *
from users inner join user_friend_junction on(user_friend_junction.friend_id = users.user_id
and user_friend_junction.accepted = true)
where user_friend_junction.user_id = $1;