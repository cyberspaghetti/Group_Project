delete from news_feed
where user_id = $1
and post_id = $2;

select * from news_feed
where user_id = $1;