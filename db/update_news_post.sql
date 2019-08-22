update "news_feed"
set "news_post_title"='updated title', "news_post_body" = 'did this update work?', "news_post_image" = 'not and image', "news_post_date" = '02/04/91'
where server_id = $1
and news_post_id = $2