insert into user_friend_junction
    (user_id, friend_id, accepted)
VALUES($1, $2, false);

select *
from user_friend_junction
where user_id = $1 or friend_id = $1 and accepted = false;