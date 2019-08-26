select * from news_feed
where user_id = $1
and post_id = $2;

insert into news_feed
    ( news_post_title, news_post_image, news_post_body, news_post_date )
values
    ( $1, $2, $3, $4, $5 )

select * from news_feed
where user_id = $1   