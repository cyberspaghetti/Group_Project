
CREATE TABLE "users"
(
	"user_id" serial NOT NULL,
	"user_name" VARCHAR,
	"user_password" VARCHAR,
	"user_email" VARCHAR,
	"user_image" VARCHAR,
	"auth0_id" varchar
);

CREATE TABLE "servers"
(
	"server_id" serial PRIMARY KEY not null,
	"server_name" VARCHAR,
	"server_image" VARCHAR,
	"user_id" VARCHAR
);

CREATE TABLE "socket_messages"
(
	"socket_message_id" serial NOT NULL,
	"room_id" VARCHAR,
	"user_id" VARCHAR,
	"message" VARCHAR
);

CREATE TABLE "socket_rooms"
(
	"socket_room_id" serial,
	"room_name" VARCHAR UNIQUE,
	"server_id" integer
);

CREATE TABLE "news_feed"
(
	"news_post_id" serial,
	"server_id" VARCHAR,
	"news_post" VARCHAR,
	"news_post_date" VARCHAR,
	"news_post_image" VARCHAR
);


CREATE TABLE "server_users_junction"
(
	"server_junction_id" serial,
	"user_id" int,
	"server_id" int
);
