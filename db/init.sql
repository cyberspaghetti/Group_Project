-- CREATE TABLE "users" (
-- 	"user_id" serial NOT NULL,
-- 	"user_name" VARCHAR,
-- 	"user_password" VARCHAR,
-- 	"user_email" VARCHAR,
-- 	"user_image" VARCHAR,
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "servers" (
-- 	"server_id" serial NOT NULL,
-- 	"server_name" VARCHAR,
-- 	"server_image" VARCHAR,
-- 	"owner_id" VARCHAR,
-- 	CONSTRAINT "servers_pk" PRIMARY KEY ("server_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "socket_messages" (
-- 	"socket_message_id" serial NOT NULL,
-- 	"room_id" VARCHAR,
-- 	"user_id" VARCHAR,
-- 	"message" VARCHAR,
-- 	CONSTRAINT "socket_messages_pk" PRIMARY KEY ("socket_message_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "socket_rooms" (
-- 	"socket_room_id" serial,
-- 	"room_name" VARCHAR UNIQUE,
-- 	CONSTRAINT "socket_rooms_pk" PRIMARY KEY ("socket_room_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "news_feed" (
-- 	"news_post_id" serial NOT NULL,
-- 	"server_id" VARCHAR,
-- 	"news_post" VARCHAR,
-- 	"news_post_date" VARCHAR,
-- 	"news_post_image" VARCHAR,
-- 	CONSTRAINT "news_feed_pk" PRIMARY KEY ("news_post_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "server_users_junction" (
-- 	"server_junction_id" serial NOT NULL,
-- 	"member_id" int NOT NULL,
-- 	"server_id" int NOT NULL,
-- 	CONSTRAINT "server_users_junction_pk" PRIMARY KEY ("server_junction_id")
-- ) WITH (
--   OIDS=FALSE
-- );
