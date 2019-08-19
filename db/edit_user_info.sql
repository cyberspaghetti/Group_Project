update users
set user_name = $2, user_image = $3
where auth0_id = $1;

select *
from users
where auth0_id = $1;